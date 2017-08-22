import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "../../providers/getdata/getdata";
import { Slides } from "ionic-angular";
import { ViewChild } from "@angular/core";
import { Content } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: "page-catpage",
  templateUrl: "catpage.html"
})
export class CatpagePage {
  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;
  url: string;
  items: any;
  badgeClass: string;
  image0: any;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  stData: any;
  catId: string;
  tempData: any;
  titleColor: string;
  urlTemp: string;
  catIdTemp: any;
  nextCatId: string;
  showSubmenu: boolean = false;
  storageArray: any;
  isInFavs0: any = false;
  isInFavs1: any = false;
  isInFavs2: any = false;
  isInFavs3: any = false;
  isInFavs4: any = false;
  isInFavs5: any = false;
  isInFavs6: any = false;
  isInFavs7: any = false;
  isInFavs8: any = false;
  isInFavs9: any = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata: GetdataProvider,
    public strgPrvd: StorageproviderProvider,
    public alert: AlertController,
    public storage: Storage
  ) {
    this.catId = this.navParams.get("CatId");
  }

  ionViewDidLoad() {
    this.storage.get(this.navParams.get("StorageData")).then(data => {
      console.log(data);
      this.image0 = data[0];
      this.image1 = data[1];
      this.image2 = data[2];
      this.image3 = data[3];
      this.image4 = data[4];
      this.image5 = data[5];
      this.image6 = data[6];
      this.image7 = data[7];
      this.image8 = data[8];
      this.image9 = data[9];
      this.items = data;

      this.strgPrvd.checkIfInfavs(data[0].nid).then(val => {
        console.log(val);
        this.isInFavs0 = val;
        console.log(this.isInFavs0);
      });
      this.strgPrvd.checkIfInfavs(data[1].nid).then(val => {
        console.log("1p " + data[1].nid);
        console.log("val " + val);
        this.isInFavs1 = val;
      });
      this.strgPrvd.checkIfInfavs(data[2].nid).then(val => {
        console.log(data[2].nid);
        this.isInFavs2 = val;
      });
      this.strgPrvd.checkIfInfavs(data[3].nid).then(val => {
        this.isInFavs3 = val;
      });
      this.strgPrvd.checkIfInfavs(data[4].nid).then(val => {
        this.isInFavs4 = val;
      });
      this.strgPrvd.checkIfInfavs(data[5].nid).then(val => {
        this.isInFavs5 = val;
      });
      this.strgPrvd.checkIfInfavs(data[6].nid).then(val => {
        this.isInFavs6 = val;
      });
      this.strgPrvd.checkIfInfavs(data[7].nid).then(val => {
        this.isInFavs7 = val;
      });
      this.strgPrvd.checkIfInfavs(data[8].nid).then(val => {
        this.isInFavs8 = val;
      });
      this.strgPrvd.checkIfInfavs(data[9].nid).then(val => {
        this.isInFavs9 = val;
      });
      switch (this.image0.category) {
        case "Κύπρος":
          this.badgeClass = "CyprusClass";
          this.titleColor = "CyprusColor";
          break;
        case "Πολιτική":
          this.badgeClass = "PolitikiClass";
          this.titleColor = "PolitikiColor";
          break;
        case "Ελλάδα":
          this.badgeClass = "GreeceClass";
          this.titleColor = "GreeceColor";
          break;
        case "Διεθνή":
          this.badgeClass = "DiethniClass";
          this.titleColor = "DiethniColor";
          break;
        case "Αθλητικά":
          this.badgeClass = "SportsClass";
          this.titleColor = "SportsColor";
          break;
        case "Ψυχαγωγία":
          this.badgeClass = "EntertainmentClass";
          this.titleColor = "EntertainmentColor";
          break;
        case "Υγεία":
          this.badgeClass = "HealthClass";
          this.titleColor = "HealthColor";
          break;
        case "Οικονομία":
          this.badgeClass = "EconomyClass";
          this.titleColor = "EconomyColor";
          break;
        default:
          this.badgeClass = "DefaultClass";
          this.titleColor = "DefColor";
      }
    });
  }
  goToNextCat(e) {
    this.storageArray = [
      "CypData",
      "PolData",
      "",
      "GreeceData",
      "IntData",
      "SportsData",
      "EntData",
      "HealthData",
      "EconomyData"
    ];
    if (e.direction == 2) {
      if (this.catId != "9") {
        this.catIdTemp = parseInt(this.catId);
        if (this.catIdTemp == 2) {
          this.catIdTemp += 2;
        } else this.catIdTemp += 1;
        this.stData = this.storageArray[this.catIdTemp - 1];
        this.nextCatId = this.catIdTemp.toString();
        this.catId = this.nextCatId;
        this.navCtrl.push(CatpagePage, {
          StorageData: this.stData,
          CatId: this.nextCatId
        });
      } else
        this.navCtrl.push(CatpagePage, { StorageData: "CypData", CatId: "1" });
    } else if (e.direction == 4) {
      if (this.catId != "1") {
        this.catIdTemp = parseInt(this.catId);
        if (this.catIdTemp == 4) {
          this.catIdTemp -= 2;
        } else this.catIdTemp -= 1;
        this.stData = this.storageArray[this.catIdTemp - 1];
        this.nextCatId = this.catIdTemp.toString();
        this.catId = this.nextCatId;
        this.navCtrl.push(CatpagePage, {
          StorageData: this.stData,
          CatId: this.nextCatId
        });
      } else
        this.navCtrl.push(CatpagePage, {
          StorageData: "EconomyData",
          catId: "9"
        });
    }
  }

  openArticle(item) {
    this.navCtrl.push("ArticlePage", { items: item });
  }

  openSubMenu() {
    this.showSubmenu = !this.showSubmenu;
    this.content.scrollToBottom;
  }

  setFav0(item) {
    this.strgPrvd.setFavs(item);
    this.isInFavs0 = true;
  }

  setFav1(item) {
    this.strgPrvd.setFavs(item);
    this.isInFavs1 = true;
  }

  setFav2(item) {
    this.strgPrvd.setFavs(item);
    this.isInFavs2 = true;
  }

  alertFav() {
    this.storage.remove("favs");
    let alertBox = this.alert.create({
      title: "Already in Favorites",
      subTitle: "Το άρθρο αυτό είναι ήδη στα Αγαπημένα",
      buttons: ["OK"]
    });
    alertBox.present();
  }
}

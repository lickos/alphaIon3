import { StorageproviderProvider } from './../../providers/storageprovider/storageprovider';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "../../providers/getdata/getdata";
import { Slides } from "ionic-angular";
import { ViewChild } from "@angular/core";
import { Content } from "ionic-angular";
import { AlertController } from 'ionic-angular';

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
  image0: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  catId: string;
  titleColor: string;
  urlTemp: string;
  catIdTemp: any;
  nextCatId: string;
  showSubmenu: boolean = false;
  isInFavs0:any = false;
  isInFavs1:any = false;
  isInFavs2:any = false;
  isInFavs3:any = false;
  isInFavs4:any = false;
  isInFavs5:any = false;
  isInFavs6:any = false;
  isInFavs7:any = false;
  isInFavs8:any = false;
  isInFavs9:any = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata: GetdataProvider,
    public strgPrvd: StorageproviderProvider,
    public alert: AlertController
  ) {
    this.urlTemp = this.navParams.get("url");
    this.catId = this.navParams.get("catId");
    this.url = this.urlTemp + this.catId;
  }

  ionViewDidLoad() {
    this.getdata.getRemoteData(this.url).then(data => {
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
      this.strgPrvd.checkIfInfavs(data[0].nid).then((val)=>{
        console.log(val)
        this.isInFavs0 = val;
      });
      this.strgPrvd.checkIfInfavs(data[1].nid).then((val)=>{
        console.log(val);
        this.isInFavs1 = val;
      });
      // this.strgPrvd.checkIfInfavs(data[2].nid).then((val)=>{
      //   console.log(data[2].nid)
      //   this.isInFavs2 = val;
      // });
      // this.strgPrvd.checkIfInfavs(data[3].nid).then((val)=>{
      //   this.isInFavs3 = val;
      // });
      // this.strgPrvd.checkIfInfavs(data[4].nid).then((val)=>{
      //   this.isInFavs4 = val;
      // });
      // this.strgPrvd.checkIfInfavs(data[5].nid).then((val)=>{
      //   this.isInFavs5 = val;
      // });
      // this.strgPrvd.checkIfInfavs(data[6].nid).then((val)=>{
      //   this.isInFavs6 = val;
      // });
      // this.strgPrvd.checkIfInfavs(data[7].nid).then((val)=>{
      //   this.isInFavs7 = val;
      // });
      // this.strgPrvd.checkIfInfavs(data[8].nid).then((val)=>{
      //   this.isInFavs8 = val;
      // });
      // this.strgPrvd.checkIfInfavs(data[9].nid).then((val)=>{
      //   this.isInFavs9 = val;
      // });
      switch (this.items[0].category) {
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
    if (e.direction == 2) {
      if (this.catId != "9") {
        this.catIdTemp = parseInt(this.catId);
        this.catIdTemp += 1;
        this.nextCatId = this.catIdTemp.toString();
        this.catId = this.nextCatId;
        this.navCtrl.push(CatpagePage, {
          url: this.urlTemp,
          catId: this.nextCatId
        });
      } else this.navCtrl.push(CatpagePage, { url: this.urlTemp, catId: "1" });
    } else if (e.direction == 4) {
      if (this.catId != "1") {
        this.catIdTemp = parseInt(this.catId);
        this.catIdTemp -= 1;
        this.nextCatId = this.catIdTemp.toString();
        this.catId = this.nextCatId;
        this.navCtrl.push(CatpagePage, {
          url: this.urlTemp,
          catId: this.nextCatId
        });
      } else this.navCtrl.push(CatpagePage, { url: this.urlTemp, catId: "9" });
    }
  }

  openArticle(item) {
    this.navCtrl.push("ArticlePage", { items: item });
  }

  openSubMenu() {
    this.showSubmenu = !this.showSubmenu;
    this.content.scrollToBottom;
  }

  setFav(item) {
    this.strgPrvd.setFavs(item);
  }

  alertFav() {
    let alertBox = this.alert.create({
      title: 'Already in Favorites',
      subTitle: 'Το άρθρο αυτό είναι ήδη στα Αγαπημένα',
      buttons: ['OK']
    });
    alertBox.present();
  }

}

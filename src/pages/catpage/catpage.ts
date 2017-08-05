import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "../../providers/getdata/getdata";
import { Slides } from "ionic-angular";
import { ViewChild } from "@angular/core";
import { Content } from "ionic-angular";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public getdata: GetdataProvider) {
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
        this.navCtrl.push(CatpagePage, { url: this.urlTemp, catId: this.nextCatId });
      } else this.navCtrl.push(CatpagePage, { url: this.urlTemp, catId: "1" });
    } else if (e.direction == 4) {
      if (this.catId != "1") {
        this.catIdTemp = parseInt(this.catId);
        this.catIdTemp -= 1;
        this.nextCatId = this.catIdTemp.toString();
        this.catId = this.nextCatId;
        this.navCtrl.push(CatpagePage, { url: this.urlTemp, catId: this.nextCatId });
      } else this.navCtrl.push(CatpagePage, { url: this.urlTemp, catId: "9" });
    }
  }

  openArticle(item) {
    this.navCtrl.push('ArticlePage', { items: item });
  }

  openSubMenu() {
    this.showSubmenu = !this.showSubmenu;
    this.content.scrollToBottom;
  }
}

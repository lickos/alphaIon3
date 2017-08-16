import { Storage } from '@ionic/storage';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "../../providers/getdata/getdata";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  CypData: any;
  CypData1: any;
  CypData2: any;
  PolData: any;
  PolData1: any;
  PolData2: any;
  SportsData: any;
  SportsData1:any;
  SportsData2:any;
  EntData: any;
  EntData1: any;
  EntData2: any;
  IntData: any;
  IntData1: any;
  IntData2: any;
  badgeClass: string;
  backImage: string = "http://alphanews.live/sites/default/files/styles/media_image/public/2017-08/20631418_10213406715825402_2006238752_n.png?itok=bD437OY-";




  constructor(
    public navCtrl: NavController,
    public getData: GetdataProvider,
    public navParams: NavParams,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    this.storage.get("CypData")
      .then(data => {
        this.CypData = data[0];
        this.CypData1 = data[1];
        this.CypData2 = data[2];
      });
    this.storage.get("PolData")
      .then(data => {
        this.PolData = data[0];
        this.PolData1 = data[1];
        this.PolData2 = data[2];
      });
    this.storage.get("SportsData")
      .then(data => {
        this.SportsData = data[0];
        this.SportsData1 = data[1];
        this.SportsData2 = data[2];
      });
    this.storage.get("EntData")
      .then(data => {
        this.EntData = data[0];
        this.EntData1 = data[1];
        this.EntData2 = data[2];
      });
    this.storage.get("IntData")
      .then(data => {
        this.IntData = data[0];
        this.IntData1 = data[1];
        this.IntData2 = data[2];
      });
  }
      openArticle(item) {
        this.navCtrl.push("ArticlePage", { items: item });
      }
}

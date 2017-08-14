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
  PolData: any;
  SportsData: any;
  EntData: any;
  IntData: any;
  badgeClass: string;
  backImage: string = "http://alphanews.live/sites/default/files/styles/media_image/public/2017-08/20631418_10213406715825402_2006238752_n.png?itok=bD437OY-";
  CypData1: any;
  CypData2: any;
  PolData1: any;
  PolData2: any;
  SportsData1:any;
  SportsData2:any;

  constructor(
    public navCtrl: NavController,
    public getData: GetdataProvider,
    public navParams: NavParams,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    this.getData
      .getRemoteData("https://alphanews.live/json/cat/1")
      .then(data => {
        this.CypData = data[0];
        this.CypData1 = data[1];
        this.CypData2 = data[2];
        this.storage.set('CypData', data);
      });
    this.getData
      .getRemoteData("https://alphanews.live/json/cat/2")
      .then(data => {
        this.PolData = data[0];
        this.PolData1 = data[1];
        this.PolData2 = data[2];
        this.storage.set('PolData', data);
      });
    this.getData
      .getRemoteData("https://alphanews.live/json/cat/6")
      .then(data => {
        this.SportsData = data[0];
        this.SportsData1 = data[1];
        this.SportsData2 = data[2];
        this.storage.set('SportsData', data);
      });
    this.getData
      .getRemoteData("https://alphanews.live/json/cat/7")
      .then(data => {
        this.EntData = data[0];
        this.storage.set('EntData', data);
      });
    this.getData
      .getRemoteData("https://alphanews.live/json/cat/5")
      .then(data => {
        this.IntData = data[0];
        this.storage.set('IntData', data);
      });
  }
      openArticle(item) {
        this.navCtrl.push("ArticlePage", { items: item });
      }
}

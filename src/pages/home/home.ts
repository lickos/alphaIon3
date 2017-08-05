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

  constructor(
    public navCtrl: NavController,
    public getData: GetdataProvider,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.getData
      .getRemoteData("https://alphanews.live/json/cat/1")
      .then(data => {
        this.CypData = data[0];
      });
    this.getData
      .getRemoteData("https://alphanews.live/json/cat/2")
      .then(data => {
        this.PolData = data[0];
      });
    this.getData
      .getRemoteData("https://alphanews.live/json/cat/6")
      .then(data => {
        this.SportsData = data[0];
      });
    this.getData
      .getRemoteData("https://alphanews.live/json/cat/7")
      .then(data => {
        this.EntData = data[0];
      });
    this.getData
      .getRemoteData("https://alphanews.live/json/cat/5")
      .then(data => {
        this.IntData = data[0];
      });
  }
}

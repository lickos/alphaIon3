import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-favorites",
  templateUrl: "favorites.html"
})
export class FavoritesPage {
  items: any;

  constructor(public navCtrl: NavController, public strgprvd: StorageproviderProvider, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.strgprvd.getFavs().then(data => {
      this.items = data;
    });
  }

  openArticle(item) {
    this.navCtrl.push("ArticlePage", { items: item });
  }
}

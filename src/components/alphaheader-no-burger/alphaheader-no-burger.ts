import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "alphaheader-no-burger",
  templateUrl: "alphaheader-no-burger.html"
})
export class AlphaheaderNoBurgerComponent {
  text: string;

  constructor(public navCtrl: NavController) {}

  openFavs() {
    this.navCtrl.push("FavoritesPage");
  }
}

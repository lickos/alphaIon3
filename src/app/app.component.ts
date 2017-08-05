import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { OneSignal } from "@ionic-native/onesignal";
import { GetdataProvider } from "../providers/getdata/getdata";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = "HomePage";
  cyp: string;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    private oneSignal: OneSignal,
    public splashScreen: SplashScreen,
    public getData: GetdataProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.oneSignal.startInit(
        "61b6d88e-c018-41b1-9fa6-4a1a01b0336d",
        "221135394305"
      );
      this.oneSignal.endInit();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(url, catId, test) {
    this.nav.push("CatpagePage", { url: url, catId: catId });
  }
}

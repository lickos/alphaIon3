import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { OneSignal } from "@ionic-native/onesignal";
import { GetdataProvider } from "../providers/getdata/getdata";
import { MenuController } from "ionic-angular";
import { StorageproviderProvider } from "../providers/storageprovider/storageprovider";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = "HomePage";
  showMeCyp: boolean = false;
  showMePol: boolean = false;
  showMeSports: boolean = false;
  showMeHealth: boolean = false;
  showMeEnt: boolean = false;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    private oneSignal: OneSignal,
    public splashScreen: SplashScreen,
    public getData: GetdataProvider,
    public menuCtrl: MenuController,
    public strgPrvd: StorageproviderProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.oneSignal.startInit("61b6d88e-c018-41b1-9fa6-4a1a01b0336d", "221135394305");
      this.oneSignal.endInit();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.strgPrvd.setCats();
    });
  }

  openCyp() {
    if (this.showMeCyp) {
      this.showMeCyp = false;
      this.menuCtrl.close();
      this.nav.push("CatpagePage", { StorageData: "CypData", CatId: "1" });
    } else {
      this.showMeCyp = true;
    }
  }

  openPol() {
    if (this.showMePol) {
      this.showMePol = false;
      this.menuCtrl.close();
      this.nav.push("CatpagePage", { StorageData: "PolData", CatId: "2" });
    } else {
      this.showMePol = true;
    }
  }

  openSports() {
    if (this.showMeSports) {
      this.showMeSports = false;
      this.menuCtrl.close();
      this.nav.push("CatpagePage", { StorageData: "SportsData", CatId: "6" });
    } else {
      this.showMeSports = true;
    }
  }

  openHealth() {
    if (this.showMeHealth) {
      this.showMeHealth = false;
      this.menuCtrl.close();
      this.nav.push("CatpagePage", { StorageData: "HealthData", CatId: "8" });
    } else {
      this.showMeHealth = true;
    }
  }

  openEnt() {
    if (this.showMeEnt) {
      this.showMeEnt = false;
      this.menuCtrl.close();
      this.nav.push("CatpagePage", { StorageData: "EntData", CatId: "7" });
    } else {
      this.showMeEnt = true;
    }
  }

  openGreece() {
    this.nav.push("CatpagePage", { StorageData: "GreeceData", CatId: "4" });
  }

  openInt() {
    this.nav.push("CatpagePage", { StorageData: "IntData", CatId: "5" });
  }

  openEconomy() {
    this.nav.push("CatpagePage", { StorageData: "EconomyData", CatId: "9" });
  }

  openBlog() {
    this.nav.push("BlogPage");
  }

  openSettings() {
    this.nav.push("SettingsPage");
  }

  openTemp() {
    this.nav.push("TemphomePage");
  }
}

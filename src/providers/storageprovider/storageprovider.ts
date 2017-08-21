import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class StorageproviderProvider {
  items: any;
  favs: any;
  testArray: any;
  cats: any;
  TempArray = [true, true, true, true, true, true, true, true];

  constructor(public storage: Storage) {}

  setFavs(item) {
    console.log("Data added" + item);
    this.storage.get("favs").then(data => {
      this.items = data;
      if (data != null || data != undefined) {
        this.items.push(item);
        this.storage.set("favs", this.items);
      } else {
        let arr = [];
        arr.push(item);
        this.storage.set("favs", arr);
      }
    });
  }
  getFavs() {
    return new Promise(resolve => {
      this.storage.get("favs").then(data => {
        this.favs = data;
        console.log(this.favs);
        resolve(this.favs);
      });
    });
  }

  checkIfInfavs(artId: string) {
    return new Promise(resolve => {
      this.storage.get("favs").then(data => {
        this.items = data;
        if (this.items == null) {
          resolve(false);
        } else {
          for (let item of this.items) {
            if (item.nid == artId) {
              resolve(true);
            } else resolve(false);
          }
        }
      });
    });
  }

  setCats() {
    this.storage.get("CategoriesArray").then(data => {
      if (data == null  || data == undefined) {
        this.storage.set("CategoriesArray", this.TempArray);
      }
    });
  }

  getCats() {
    return new Promise(resolve => {
      this.storage.get("CategoriesArray").then(data => {
        this.cats = data;
        console.log(this.cats);
        resolve(this.cats);
      });
    });
  }

  updateCats(newArray) {
    this.storage.set("CategoriesArray", newArray);
  }
}

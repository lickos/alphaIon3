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
      if (data != null && data != undefined) {
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

  checkIfInfavs(artId: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.getFavs().then(data => {
        this.items = data;
        console.log(this.items);
        if (this.items == null) {
          console.log("null array");
          return Promise.resolve(false);
        } else {
          for (let item of this.items) {
            console.log(item);
            console.log("item.nid " + item.nid);
            console.log("artId " + artId);
            console.log(item.nid == artId);
            if (item.nid == artId) {
              console.log("Into the trure" + item.nid);
              return Promise.resolve(true);
            }
          }
        }
      });
    });
  }

  setCats() {
    this.storage.get("CategoriesArray").then(data => {
      console.log(data);
      if (data == null || data == undefined) {
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  catArray = [];
  Cyprus: boolean
  Politiki: boolean

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  updateArray() {
    if(this.Cyprus){
      this.catArray[0] = '1'
    } else {
      this.catArray[0] ='';
    }
    if(this.Politiki){
      this.catArray[1] = '2'
    } else this.catArray[1] = ''
    console.log(this.catArray);
  }

}

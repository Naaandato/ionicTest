import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter HomePage')
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter HomePage')
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave HomePage')
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave HomePage')
  }

  ionViewWillUnload(){
    console.log('ionViewWillUnload HomePage')
  }

  navigateToSecondPage(){
    this.navCtrl.push('SecondPage', {message: "Hello from home page"});
  }

}

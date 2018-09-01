import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  myInfo = {
    name:'', 
    details:''  
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public crudProvider:CrudProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  insertData(){
    this.crudProvider.insertBooks(this.myInfo).then((result)=>{
      console.log(result)
      this.navCtrl.pop()
    },(err)=>{
      console.log("insert error: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(this.myInfo))
    })
   }

}

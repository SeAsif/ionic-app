import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CrudProvider } from '../../providers/crud/crud';
import { CreatePage } from '../create/create';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mydata: any;
  constructor(public navCtrl: NavController, public crudProvider:CrudProvider) {
    this.crudProvider.getBooks().then((data) => {  
        this.mydata = data["data"] 
        console.log( this.mydata)
    })
  }

  onEdit( id, name, details){
    console.log("book edit info: "+id  +   details) 
    this.navCtrl.push(EditPage, {
      id:id, 
      name:name, 
      details:details, 
    })  
  }

  createPage(){
    this.navCtrl.push(CreatePage)
  }

  onDelete(id){
    this.crudProvider.deleteBooks( id ).then((result)=>{
      console.log(result)
    },(err)=>{
      console.log("Insert error: "+ err)
      console.log("Delete this.id: "+ id)
    })
  }

}

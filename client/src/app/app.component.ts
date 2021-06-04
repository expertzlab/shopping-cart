import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shopping-cart';
  @ViewChild('userlogin') sform!: NgForm;

  defaultEmail:string = "s@s.com"

  email:string = ''
  password:string = ''
  secret:string = ''

  constructor() {}

  onClickSubmit(){
    console.log("submitted")
    
    console.log(this.sform)
    console.log("received"+ JSON.stringify(this.sform.value) )
  }

}

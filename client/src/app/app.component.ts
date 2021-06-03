import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shopping-cart';


  email:string = ''
  password:string = ''
  secret:string = ''

  constructor() {}

  onClickSubmit(form:NgForm){
    console.log("submitted")
    console.log(form)
  }

}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shopping-cart';
  defulatEmail = "user@example.com"
  @ViewChild('userlogin') sform!: NgForm;
  secret = '';
  genders = ['Male', 'Female']

  user: User = {email:'', password:'', secret:''}

  constructor(){
  
  }

  /*
  onClickSubmit(form: NgForm){
    console.log("submitted")
    console.log(form.value)
  }
  */

  onClickSubmit(){
    console.log(this.sform)
    
    this.user.email = this.sform.value.userData.email;
    this.user.password = this.sform.value.userData.password
    this.user.secret = this.sform.value.secret
    this.sform.reset()
    
  }

  suggest(){
    this.sform.form.patchValue({
      userData:{
        email: 'super@s.com'
      }
    })
  }
}

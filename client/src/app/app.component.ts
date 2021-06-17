import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'shopping-cart';
  
  signupForm!: FormGroup

  validationMessages: any = {}

  email:string = ''
  password:string = ''
  secret:string = ''
  loginOptions = ['email', 'phone']

  constructor() {
    this.validationMessages.email = {
      required: 'Email Required',
      minlength: 'Email minimum length required',
      email: 'Email format is not correct'
    }
    this.validationMessages.password = {
      required: 'Password Required',
      minlength: "Password min length 10"
    }
  }

  ngOnInit(){

    let passWordCtrl = null
    if(true){
      passWordCtrl =  new FormControl(null, this.passwordValidation )
    } else {
      passWordCtrl = new FormControl(null, Validators.required )
    }

    let ageCtrl = new FormControl(null, [Validators.required, Validators.min(18), Validators.max(65)])
     let loginOp = new FormControl(null)
     
    this.signupForm = new FormGroup({
      'email': new FormControl(null,[ 
        Validators.required, Validators.email, Validators.minLength(10)
      ]),
      password : passWordCtrl,
      age: ageCtrl,
      'loginOp': loginOp,
      'secret': new FormControl('pet')
    })

    this.signupForm.valueChanges.subscribe((data) => {
      console.log('data: ', data)
    })
    
  }

  onClickSubmit(){
    console.log("submitted")
    console.log("received"+ JSON.stringify(this.signupForm.value)  )
    this.loopTroughControls(this.signupForm)
  }

  passwordValidation(formControl: any){

    const regex = /[A-Z]/gi
    if(formControl.value != null && formControl.value.length < 5){
      return {"minlength":true}
    } 
    if(formControl.value != null && !formControl.value.match(regex)){
      return {"passwd":true}
    }
    else {
      return {}
    }
  }

  loopTroughControls(group: FormGroup){
    Object.keys(group.controls).forEach((key) => {
      let ctrl:any = group.get(key)
      ctrl.disable()
      console.log('key: ', key, 'value:', ctrl.value )
    })
  }

}

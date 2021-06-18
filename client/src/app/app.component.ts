import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
    this.validationMessages.phone = {
      required: 'Phone Required',
      minlength: 'Phone should have 10 digits',
      phone: 'Phone format is not correct'
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
    let phoneCtrl = new FormControl(null)
    
    let multifactor = new FormGroup({
      'otp': new FormControl(null, Validators.required)
    })

    this.signupForm = new FormGroup({
      'email': new FormControl(null),
      'phone': new FormControl(null),
      password : passWordCtrl,
      age: ageCtrl,
      'loginOp': loginOp,
      'secret': new FormControl('pet'),
      'multifactor': multifactor,
      'hobbies': new FormArray([])
    })

    this.onloaddata()
    this.signupForm.valueChanges.subscribe((data) => {
      console.log('data: ', data)
      console.log('p: ',JSON.stringify(this.signupForm.controls.phone.errors))
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
      //ctrl.disable()
      console.log('key: ', key, 'value:', ctrl.value )
    })
  }

  onclickOption(ctrlName: string){
    
    let  ctrlEmail = this.signupForm.controls.email
    let  ctrlPhone = this.signupForm.controls.phone
    if(ctrlName == 'email'){
      ctrlEmail.setValidators([Validators.email, Validators.required])
      ctrlPhone.setValidators([])
    } else {
      ctrlPhone.setValidators([Validators.pattern('.*\\d'), Validators.required, Validators.minLength(10)])
      ctrlEmail.setValidators([])
    }
    ctrlEmail.updateValueAndValidity()
    ctrlPhone.updateValueAndValidity
  }

  onloaddata(){

    this.signupForm.patchValue({
      'email': 's@s.com',
      'phone' : '2323232323',
      'age':34,
      'loginOp':'email',
      'secret':'pet',
      'multifactor':{'otp':'2222'}
    })
  }

  onAddHobby(){
    let frmArray = <FormArray> this.signupForm.get('hobbies')
    frmArray.push(new FormControl(null))
    console.log('Hobby:',this.signupForm )
  }

  getControls(){
   return (<FormArray> this.signupForm.get('hobbies')).controls
  }

}

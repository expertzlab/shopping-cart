import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, interval, of, pipe } from 'rxjs';
import { filter, map, timeout } from 'rxjs/operators'​;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'shopping-cart';
  link= ''
  initialMoney = 5500
  signupForm!: FormGroup
  timeOut = 0
  validationMessages: any = {}
  count = 0
  email:string = ''
  password:string = ''
  secret:string = ''
  loginOptions = ['email', 'phone']
  fb: FormBuilder

  constructor(private _fb: FormBuilder, private route: ActivatedRoute) {
    this.fb = _fb

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
    
    this.route.params.subscribe( (p) => {
      this.link = p.id
      console.log("Received Event")
    })
     this.signupForm = this.fb.group({
       'email':[],  'phone':[], 'password':[], 'age':[], 'loginOp':[], 'secret':['pet'],
       'multifactor': this.fb.group({
         'otp':[]
       }),
       'hobbies': this.fb.array([])
     })

    this.onloaddata()
    this.signupForm.valueChanges.subscribe((data) => {
      console.log('data: ', data)
      console.log('p: ',JSON.stringify(this.signupForm.controls.phone.errors))
    })
    
    let st = of(1,2,3,4,5)
     let _pipe = pipe(
      //filter((n : any) =>  n % 2 == 0),
      //map((n: any) => n * n )
    )
    
    //let obable = _pipe(st)
    st.subscribe( (val: any) => {
      console.log('subscriber received:',val)
    })

    interval(1000).subscribe( (c) => {
      console.log('product r:',c)
      this.count = c
      if(this.count > this.timeOut){
        this.count = 0
      }
    } )

  }

  onClickSubmit(){
    console.log("submitted")
    console.log("received"+ JSON.stringify(this.signupForm.value)  )
    this.loopTroughControls(this.signupForm)
  }

  ngDoCheck(){

    const ESC_KEY = 27
    var emailInput = document.getElementById('email') as HTMLInputElement
    console.log('Input:', emailInput)
    /*
    fromEvent(emailInput,'keydown').subscribe((e: Event) => {

        if((<KeyboardEvent>e).keyCode == ESC_KEY){
          emailInput.value = ''
          console.log("ESC pressed")
        }
        console.log('email event')
    })
    */
    
  }

  @HostListener('window:keydown',['$event']) sw(e: KeyboardEvent){
    console.log('key down pressed', e)
    if((<HTMLInputElement>e.target).id == 'email'){
      if(e.keyCode == 27)
      (<HTMLInputElement>e.target).value = ''
    }
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

  onProduceData(e: string){
    alert('event Received:'+ e )
  }

}

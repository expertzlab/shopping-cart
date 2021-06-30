import { ReturnStatement } from '@angular/compiler';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { EventEmitter } from '@angular/core'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  inputs:['money'],
  outputs:['produce']
})
export class ProductComponent implements OnInit, OnDestroy {

  money!: number
  produce: EventEmitter<any> = new EventEmitter()
  count: number = 0
  subscr!: Subscription 
  obable: any

  constructor(private prodServ: ProductService) { }

  ngOnInit(): void {

    let promise = new Promise((resolve, reject) => {
        console.log('1st Ajax call')
        this.prodServ.getProducts().toPromise().then( (results) => {
          console.log('1 Received from server:', results)
          resolve({})
        }).catch(e =>{
          console.log('error: ', e)
          reject()
        })
    })
    
    let promise1 = new Promise(()=>{});
    promise.then(r1 => {
      console.log('2nd Ajax call')
      this.prodServ.getProducts().toPromise().then( (results) => {
        console.log('2 Received from server:', results)
        promise1 = new Promise((resolve, reject)=>{
          console.log('3rd Ajax call')
          this.prodServ.getProducts().toPromise().then((r2) => {
            console.log('3 Received from server:', r2)
            resolve({})
          }).catch((e)=> {
            reject()
          })
          

        })
        
      }).catch(e =>{})

    }).catch( e => {
      console.log("1st ajax call failed")
    })

    promise1.then((result: any) => {
      console.log("result of third ajax call", result)
    })

    this.produce.emit(10)
  
    this.obable = Observable.create((obsr: any) => {
    
      for(var i=0; i< 5; i++){
        obsr.next(i)
      }
      obsr.complete()
    })

    this.subscr = this.obable.subscribe(
      (n:number) => {
      console.log("CUSTOM:",n)
      },
      (error: any) => {
        console.log("Error received", error)
      },
      () => { 
        console.log("COMPLETE")
      }
    ) 



  }


  ngOnDestroy(){
    this.subscr.unsubscribe()
  }

  stop(){
    this.subscr.unsubscribe()
    this.produce.emit(50)
  }

}

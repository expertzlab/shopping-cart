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

    this.prodServ.getProducts().subscribe(data => {
      console.log('1 Received from server:', data)
    },
    error => { 
      console.log('error:', error)
    },
    () => {
      console.log('success!')
    }
    )
    console.log('Going to 2 Ajax')
    //2
    this.prodServ.getProducts().subscribe(data => {
      console.log('2 Received from server:', data)
    })

    console.log('Going to 3 Ajax')
    //3
    this.prodServ.getProducts().subscribe(data => {
      console.log('3 Received from server:', data)
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

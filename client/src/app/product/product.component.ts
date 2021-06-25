import { ReturnStatement } from '@angular/compiler';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit, OnDestroy {

  @Input() money!: number
  @Output() produce: EventEmitter<any> = new EventEmitter()
  count: number = 0
  subscr!: Subscription 
  obable: any
  constructor() { }

  ngOnInit(): void {

    this.produce.emit(10)
  /*
  this.subscr = interval(1000).subscribe( (c) => {
      console.log('product r:',c)
      this.count = c
    } )
  }
  */
  
    this.obable = Observable.create((obsr: any) => {
      /*
      let cnt = 0
      setInterval(() => {
          obsr.next(cnt ++) //Emitting
        if(cnt > 10){
          obsr.error( new Error('counter is greathan 10'))
        }
      }, 1000)
      */
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

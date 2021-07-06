import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { getCurrencySymbol } from '@angular/common';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  animations:[
    trigger('list',[
      state('in',style({
        opacity:1
      })),
      transition('* => void',[style({
        transform: 'translateX(0px)',
        opacity: 1
      }), animate(300, style({
        transform: 'translateX(100px)',
        opacity: 0
      }))]
    ),
    transition('void => *',[style({
      opacity: 0,
      transform: 'translateX(-100px)'
    }),animate(1000, keyframes([style({
      opacity:.1,
      transform:'translateX(-90px)',
      color: 'grey'
    }),style({
      opacity:.4,
      transform:'translateX(-60px)',
      color:'blue'
    }),style({
      opacity:.6,
      transform:'translateX(-30px)',
      color:'pink'
    }),style({
      opacity:1,
      transform:'translateX(0px)',
      color:'black'
    })]))])
  ])]
})
export class ListComponent implements OnInit {

  list1 = ['Covaxin', 'Covishield', 'Sputnik']
  list2 = ['Zoya-19']
  selectedItem:string = ''
  constructor() { }

  ngOnInit(): void {
    console.log("init List component")
  }

  selectItem(item: any){
    this.selectedItem = item
  }

  moveItem(){
    let index = this.list1.indexOf(this.selectedItem,0)
    this.list1.splice(index,1)
    this.list2.push(this.selectedItem)
  }
}

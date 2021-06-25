import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("init List component")
  }

  ngOnDestroy(){
    console.log('destoy List component')
  }

  ngOnChanges(sc: SimpleChanges){
    console.log('on changes')
    for(const c in sc){
      console.log('onchanges: ',sc[c])
    }
  }
  ngAfterContentInit(){
    console.log("Content Initiated")
  }
  ngAfterContentChecked(){
    console.log("Content Checked")
  }

  ngAfterViewInit(){
    console.log("View Initiated")
  }

  ngAfterViewChecked(){
    console.log("View Checked")
  }

  ngDoCheck(){
    console.log("Do Check")
  }
}

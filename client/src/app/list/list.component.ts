import { Component, OnDestroy, OnInit } from '@angular/core';

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

}

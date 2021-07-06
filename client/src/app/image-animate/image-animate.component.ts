import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-animate',
  templateUrl: './image-animate.component.html',
  styleUrls: ['./image-animate.component.sass'],
  animations:[
    trigger('myanimate',[
      state('lower',style({
        transform: 'translateY(100px)',
        width: '200px',
        'background-color':'red'
      })),
      state('upper', style({
        transform: 'translateY(0px)',
        'background-color': 'green'
      })),
      state('right', style({
        transform: 'translateX(100px)',
        'background-color': 'orange'
      })),
      transition('lower => upper',animate('300ms ease-out')),
      transition('upper => right',animate('300ms ease-out')),
      transition('right => lower',animate('300ms ease-out')),
    ]),
    trigger('banimation',[
      state('l', style({
        transform: 'translateX(0px)'
      })),
      state('r', style({
        transform: 'translateX(100px)'
      })),
      transition('l <=> r',animate('300ms ease-out')),
    ])
  ]
})
export class ImageAnimateComponent implements OnInit {

  state = 'lower'
  bstate = 'l'
  constructor() { }

  ngOnInit(): void {
  }

  animate(){
    console.log('Animate called')
    if(this.state == 'lower')
       this.state = 'upper'
    else if(this.state == 'upper')
      this.state = 'right'
    else
      this.state = 'lower'

    if(this.bstate == 'l')
       this.bstate = 'r'
    else
       this.bstate = 'l'  
  }

}

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  currentLink: any

  constructor(private router: Router) { }

  ngOnInit(): void {

   this.router.events
   .pipe(filter((e) => e instanceof NavigationEnd))
   .subscribe((e: any) => {
      console.log('events received:', e)
      this.currentLink = e.url
    })
  }

  pageCount(){
    return 15
  }
}

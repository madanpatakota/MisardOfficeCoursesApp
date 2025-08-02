import { Component } from '@angular/core';
import * as AOS from 'aos';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Misard-Courses-App';
  constructor(private router: Router) {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      AOS.init({ once: true }); // once: true = runs only once per element
    }
  });
}
}

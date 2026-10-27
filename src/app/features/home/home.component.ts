import { Component, ViewEncapsulation } from '@angular/core';


import * as AOS from 'aos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation  : ViewEncapsulation.None
})
export class HomeComponent {
ngOnInit() {
  AOS.init({
    duration: 1000,
    once: true
  });
}
}

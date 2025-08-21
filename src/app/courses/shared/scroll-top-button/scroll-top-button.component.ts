import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top-button',
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.css']
})
export class ScrollTopButtonComponent {
  show = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.show = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

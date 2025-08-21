import { Component, Input } from '@angular/core';

@Component({
  selector: 'img-lazy-load',
  templateUrl: './img-lazy-load.component.html',
  styleUrls: ['./img-lazy-load.component.css']
})
export class ImgLazyLoadComponent {
  @Input() src: string = '';
  @Input() alt: string = 'Loading image...';
  loaded = false;

  onLoad() {
    this.loaded = true;
  }
}

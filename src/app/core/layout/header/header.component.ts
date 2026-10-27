import { Component } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  closeNavbar(){
    const navbarElement = document.getElementById('navbarNav');
    if (navbarElement && window.innerWidth < 992) {  // Optional: collapse only on small screens
      const bsCollapse = new bootstrap.Collapse(navbarElement, {
        toggle: false
      });
      bsCollapse.hide();
    }
  }
}

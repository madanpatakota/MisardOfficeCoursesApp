import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string = '';
  showMessage = false;

  onSubscribe() {
    if (this.email.trim()) {
      this.showMessage = true;

      // Optional: auto-hide after 5 seconds
      setTimeout(() => {
        this.showMessage = false;
        this.email = '';
      }, 5000);
    }
  }

  socialAlertVisible = false;

  showSocialAlert() {
    this.socialAlertVisible = true;
    setTimeout(() => this.socialAlertVisible = false, 4000); // auto-hide after 4 seconds
  }

}

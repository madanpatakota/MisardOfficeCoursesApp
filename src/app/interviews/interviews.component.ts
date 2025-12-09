import { Component } from '@angular/core';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent {

  goToIQS() {
    window.open('https://iqs.misardacademy.com', '_blank');
  }

}

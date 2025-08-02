import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
 fallbackImage = 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png';

  projectList = [
    {
      title: 'SpaceX Mission Control',
      description: 'Launch scheduling dashboard built with Angular and Web APIs.',
      tech: 'Angular, TypeScript, REST API, Bootstrap',
      image: '../../assets/images/spacex.png',
      link: 'https://github.com/patakota/spacex-dashboard'
    },
    {
      title: 'Car Racing Game',
      description: 'Real-time car racing UI simulator with scoring and multiplayer UI.',
      tech: 'HTML, CSS, TypeScript, Angular',
      image: '../../assets/images/cars.png',
      link: 'https://github.com/patakota/car-racing'
    },
    {
      title: 'Flight Booking Portal',
      description: 'User-friendly flight booking with search filters and animations.',
      tech: 'Angular, Bootstrap, JSON Server, TypeScript',
      image: '../../assets/images/onlineflight.jpg',
      link: 'https://github.com/patakota/flight-booking'
    },
    // Add more projects as needed...
  ];
}

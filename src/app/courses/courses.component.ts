import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      title: 'HTML',
      image: '../../assets/images/HTML.jpg',
      description: 'Learn the structure of web pages using HTML5.',
      indexlink: 'courses/courses-index/html-training',
      hasVideos: true,
      hasIQ: true,
      hasAssignments: true,
      hasIndex: true,
      MainLink: 'courses-main/html-training'
    },
    {
      title: 'JavaScript',
      image: '../../assets/images/Javascript.png',
      description: 'Learn JavaScript to create dynamic, interactive web experiences.',
      indexlink: 'courses-index/javascript-training',
      hasVideos: true,
      hasIQ: true,
      hasAssignments: true,
      hasIndex: true,
      MainLink: 'courses-main/javascript-training'
    },
    {
      title: 'C#.NET',
      image: '../../assets/images/Csharp.png',
      description: 'Develop modern web and desktop apps using C#.NET.',
      indexlink: 'courses-index/csharp-training',
      hasVideos: true,
      hasIQ: true,
      hasAssignments: true,
      hasIndex: true,
      MainLink: 'courses-main/csharp-training'
    },
    {
      title: 'Angular',
      image: '../../assets/images/Angular.png',
      description: 'Master Angular for building dynamic SPAs with strong foundations.',
      indexlink: 'courses-index/angular-training',
      hasVideos: true,
      hasIQ: true,
      hasAssignments: true,
      hasIndex: true,
      MainLink: 'courses-main/angular-training'
    },
    {
      title: 'TypeScript',
      image: '../../assets/images/Typescript.jpg',
      description: 'Enhance JavaScript skills with TypeScript’s strong typing.',
      indexlink: '/courses-index/typescript-training',
      hasVideos: true,
      hasIQ: true,
      hasAssignments: true,
      hasIndex: true,
      MainLink: ''
    },
    {
      title: 'ASP.NET Core',
      image: '../../assets/images/aspnetcore.png',
      description: 'Learn ASP.NET Core for scalable APIs and web apps.',
      indexlink: '/courses-index/aspnetcore-training',
      hasVideos: true,
      hasIQ: true,
      hasAssignments: true,
      hasIndex: true,
      MainLink: ''
    },
    {
      title: 'Entity Framework',
      image: '../../assets/images/EF.png',
      description: 'Simplify database access with Entity Framework ORM.',
      indexlink: '/courses-index/entityframework-training',
      hasVideos: true,
      hasIQ: true,
      hasAssignments: true,
      hasIndex: true,
      MainLink: ''
    },
    {
      title: 'OOPS Concepts',
      image: '../../assets/images/OOPS.png',
      description: 'Master Object-Oriented Programming principles deeply.',
      indexlink: '/courses-index/oops-training',
      hasVideos: true,
      hasIQ: true,
      hasAssignments: true,
      hasIndex: true,
      MainLink: ''
    },
    
    {
      title: 'LINQ',
      image: '../../assets/images/Linq.jpg',
      description: 'Query your data efficiently with LINQ in .NET.',
      indexlink: '/courses-index/linq-training',
      hasVideos: true,
      hasIQ: true,
      hasAssignments: true,
      hasIndex: true,
      MainLink: ''
    },
    {
      title: 'Bootstrap',
      image: '../../assets/images/bootstrap.jpg',
      description: 'Build responsive websites faster with Bootstrap.',
      indexlink: '/courses-index/bootstrap-training',
      hasVideos: true,
      hasIQ: true,
      hasAssignments: true,
      hasIndex: true,
      MainLink: ''
    },
    {
      title: 'Azure',
      image: '../../assets/images/azure.png',
      description: 'Understand Cloud basics and solutions with Microsoft Azure.',
      indexlink: '/courses-index/azure-training',
      hasVideos: true,
      hasIQ: true,
      hasAssignments: true,
      hasIndex: true,
      MainLink: ''
    },
    {
      title: 'GitHub',
      image: '../../assets/images/github.png',
      description: 'Version control and collaborate efficiently using GitHub.',
      indexlink: '/courses-index/github-training',
      hasVideos: true,
      hasIQ: false,
      hasAssignments: true,
      hasIndex: true,
      MainLink: ''
    }
  ];

  ngOnInit() {
    AOS.init({
      duration: 1200,
      once: true
    });
  }
}

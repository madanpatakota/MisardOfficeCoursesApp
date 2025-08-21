import { Component } from '@angular/core';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent {
categories = [
    {
      title: 'Frontend',
      icon: 'https://img.icons8.com/color/48/angularjs.png',
      techList: 'HTML, CSS, Bootstrap, JavaScript, Angular',
    },
    {
      title: 'Middleware',
      icon: 'https://img.icons8.com/color/48/c-sharp-logo.png',
      techList: 'C#.NET, ASP.NET Core, Entity Framework',
    },
    {
      title: 'Backend',
      icon: 'https://img.icons8.com/color/48/sql.png',
      techList: 'SQL Server',
    },
    {
      title: 'Cloud',
      icon: 'https://img.icons8.com/color/48/azure-1.png',
      techList: 'Azure',
    },
  ];
}

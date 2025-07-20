import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesIndexRoutingModule } from './coursesindex-routing.module';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { AspnetcoreComponent } from './aspnetcore/aspnetcore.component';
import { CsharpComponent } from './csharp/csharp.component';
import { RouterModule } from '@angular/router';
import { CoursesIndexComponent } from './coursesindex.component';
// import { CoursesMainComponent } from '../courses-main/courses-main.component';


@NgModule({
  declarations: [
    AngularComponent,
    JavascriptComponent,
    TypescriptComponent,
    AspnetcoreComponent,
    CsharpComponent,
    CoursesIndexComponent,
    // CoursesMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoursesIndexRoutingModule
  ]
})

export class CoursesIndexModule{

}

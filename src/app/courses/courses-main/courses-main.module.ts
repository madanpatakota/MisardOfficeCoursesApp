import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesMainComponent } from '../courses-main/courses-main.component';
import { HtmlBeginnersComponent } from './html-beginners/html-beginners.component';
import { RouterModule } from '@angular/router';
import { CoursesMainRoutingModule } from './courses-main-routing.module';
import { JavascriptTrainingComponent } from './javascript-training/javascript-training.component';
import { CsharpCourseTrainingComponent } from './csharp-course-training/csharp-course-training.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.modue';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
 import { ScrollTopButtonComponent } from '../shared/scroll-top-button/scroll-top-button.component';
 import { ImgLazyLoadComponent } from '../shared/img-lazy-load/img-lazy-load.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularMainCourseComponent } from './csharp-course-training/angular-main-course/angular-main-course.component';
import { AspnetcoreComponent } from './aspnetcore/aspnetcore.component';

import { TypescriptTrainingComponent } from './typescript-training/typescript-training.component';

@NgModule({
  declarations: [
    HtmlBeginnersComponent,
    CoursesMainComponent,
    JavascriptTrainingComponent,
    CsharpCourseTrainingComponent,
    ScrollTopButtonComponent,
    ImgLazyLoadComponent,
    AngularMainCourseComponent,
    AspnetcoreComponent,
    TypescriptTrainingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoursesMainRoutingModule,
    FontAwesomeModule,       // Required for Toastr      // Required for Toastr
    // SlickCarouselModule
  ]
})

export class CoursesMainModule{

}

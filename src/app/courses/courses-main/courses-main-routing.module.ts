import { Component, NgModule } from '@angular/core';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { CoursesMainComponent } from './courses-main.component';
import { HtmlBeginnersComponent } from './html-beginners/html-beginners.component';
import { JavascriptTrainingComponent } from './javascript-training/javascript-training.component';
//import { CsharpCourseTrainingComponent } from './csharp-course-training/csharp-course-training.component';
import { CsharpCourseTrainingComponent } from './csharp-course-training/csharp-course-training.component';
import { AngularMainCourseComponent } from './csharp-course-training/angular-main-course/angular-main-course.component';
import { AspnetcoreComponent } from './aspnetcore/aspnetcore.component';
import { TypescriptTrainingComponent } from './typescript-training/typescript-training.component';

const appCourseMainRoutes: Routes = [
    {
        path: '', component: CoursesMainComponent,
        children: [
            { path: 'html-training', component: HtmlBeginnersComponent },
            { path: 'javascript-training', component: JavascriptTrainingComponent },
            { path: 'csharp-training', component: CsharpCourseTrainingComponent },
            { path: 'angular-training', component: AngularMainCourseComponent },
            { path: 'aspnetcore-training', component: AspnetcoreComponent },
            { path: 'typescript-training', component: TypescriptTrainingComponent },
            { path: '**', redirectTo: 'html-training', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(appCourseMainRoutes)],
    exports: [RouterModule]
})

export class CoursesMainRoutingModule {

}

import { Component, NgModule } from '@angular/core';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { AspnetcoreComponent } from './aspnetcore/aspnetcore.component';
import { CsharpComponent } from './csharp/csharp.component';
import { CoursesComponent } from '../courses.component';
import { CoursesIndexComponent } from './coursesindex.component';


const appCourseIndexRoutes: Routes = [
    {
        path: '', component: CoursesIndexComponent,
        children: [
            { path: 'angular-training', component: AngularComponent },
            { path: 'javascript-training', component: JavascriptComponent },
            { path: 'aspnetcore-training', component: AspnetcoreComponent },
            { path: 'csharp-training', component: CsharpComponent },
            { path: 'typescript-training', component: TypescriptComponent },
            { path: '**', redirectTo: 'angular-training', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(appCourseIndexRoutes)],
    exports: [RouterModule]
})

export class CoursesIndexRoutingModule {

}

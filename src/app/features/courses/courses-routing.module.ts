import { Component, NgModule } from '@angular/core';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';



const appCoursesRoutes: Routes = [
  { path: '', component: CoursesComponent },
  {
    path: 'courses-index',
    loadChildren: () => import('./courses-index/coursesindex.module').then(m => m.CoursesIndexModule)
  },
  {
    path: 'courses-main',
    loadChildren: () => import('./courses-main/courses-main.module').then(m => m.CoursesMainModule)
  }
  
]


@NgModule({
  imports: [RouterModule.forChild(appCoursesRoutes)],
  exports: [RouterModule]
})



export class CoursesRoutingModule {

}

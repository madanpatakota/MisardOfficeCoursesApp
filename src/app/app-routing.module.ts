import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwsComponent } from './features/articles/aws/aws.component';
import { AzureComponent } from './features/articles/azure/azure.component';
import { HtmlComponent } from './features/articles/html/html.component';
import { BootstrapComponent } from './features/bootstrap/bootstrap.component';
import { HomeComponent } from './features/home/home.component';
import { InterviewsComponent } from './features/interview-prep/interviews/interviews.component';
import { MeetYourMentorsComponent } from './features/meet-your-mentors/meet-your-mentors.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'iqs', component: InterviewsComponent },
  {
    path: 'login',
    data: { mode: 'login' },
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'signup',
    data: { mode: 'signup' },
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'bootstrap-training', component: BootstrapComponent },
  { path: 'html-training', component: HtmlComponent },
  { path: 'aws-training', component: AwsComponent },
  { path: 'azure-training', component: AzureComponent },
  { path: 'meet-your-mentor', component: MeetYourMentorsComponent },
  { path: 'not-found', component: NotfoundComponent },
  {
    path: 'articles',
    loadChildren: () => import('./features/articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule)
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

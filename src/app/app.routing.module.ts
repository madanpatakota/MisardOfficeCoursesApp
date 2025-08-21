import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HtmlComponent } from './articles/html/html.component';
import { AwsComponent } from './articles/aws/aws.component';
import { AzureComponent } from './articles/azure/azure.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptArticlesComponent } from './articles/typescript-articles/typescript-articles.component';
import { JavascriptArticlesComponent } from './articles/javascript-articles/javascript-articles.component';
import { AngularArticlesComponent } from './articles/angular-articles/angular-articles.component';
import { TemplatesComponent } from './bootstrap/templates/templates.component';
import { HomealertComponent } from './homealert/homealert.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CourseupdatesComponent } from './courseupdates/courseupdates.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { ArticlesComponent } from './articles/articles.component';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeetYourMentorsComponent } from './meet-your-mentors/meet-your-mentors.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'courses', component: CoursesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'iqs', component: InterviewsComponent },

  { path: 'bootstrap-training', component: BootstrapComponent },
  { path: 'html-training', component: HtmlComponent },
  { path: 'aws-training', component: AwsComponent },
  { path: 'azure-training', component: AzureComponent },
  {path:'meet-your-mentor' , component:MeetYourMentorsComponent},
  { path: 'not-found', component: NotfoundComponent },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    BootstrapComponent,
    CoursesComponent,
    AwsComponent,
    AzureComponent,
    ArticlesComponent,
    InterviewsComponent,
    CourseupdatesComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    HomealertComponent,
    TemplatesComponent,
    AngularArticlesComponent,
    JavascriptArticlesComponent,
    TypescriptArticlesComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // or 'top'
      anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

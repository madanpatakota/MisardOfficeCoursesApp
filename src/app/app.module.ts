import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AuthComponent } from './features/auth/auth.component';
import { ArticlesComponent } from './features/articles/articles.component';
import { AngularArticlesComponent } from './features/articles/angular-articles/angular-articles.component';
import { AwsComponent } from './features/articles/aws/aws.component';
import { AzureComponent } from './features/articles/azure/azure.component';
import { HtmlComponent } from './features/articles/html/html.component';
import { JavascriptArticlesComponent } from './features/articles/javascript-articles/javascript-articles.component';
import { TypescriptArticlesComponent } from './features/articles/typescript-articles/typescript-articles.component';
import { BootstrapComponent } from './features/bootstrap/bootstrap.component';
import { TemplatesComponent } from './features/bootstrap/templates/templates.component';
import { CoursesComponent } from './features/courses/courses.component';
import { HomeComponent } from './features/home/home.component';
import { InterviewsComponent } from './features/interview-prep/interviews/interviews.component';
import { MeetYourMentorsComponent } from './features/meet-your-mentors/meet-your-mentors.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HtmlComponent,
    BootstrapComponent,
    CoursesComponent,
    AwsComponent,
    AzureComponent,
    ArticlesComponent,
    InterviewsComponent,
    HomeComponent,
    TemplatesComponent,
    AngularArticlesComponent,
    JavascriptArticlesComponent,
    TypescriptArticlesComponent,
    ProjectsComponent,
    MeetYourMentorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap:[AppComponent]
  
})
export class AppModule { }

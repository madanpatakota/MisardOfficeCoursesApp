import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { AngularArticlesComponent } from './angular-articles/angular-articles.component';
import { JavascriptArticlesComponent } from './javascript-articles/javascript-articles.component';
import { TypescriptArticlesComponent } from './typescript-articles/typescript-articles.component';
import { CsharpArticlesComponent } from './csharp-articles/csharp-articles.component';
import { NetcoreArticlesComponent } from './netcore-articles/netcore-articles.component';
import { HtmlArticlesComponent } from './html-articles/html-articles.component';
import { HtmlArticlesNewwindowComponent } from './html-articles/html-articles-newwindow/html-articles-newwindow.component';
import { JsItemArticleComponent } from './javascript-articles/js-item-article/js-item-article.component';
import { HtmlItemArticleComponent } from './html-articles/html-item-article/html-item-article.component';

const appChildRoutes: Routes = [
  { path: '', component: ArticlesComponent },
  {
    path: 'angular-articles', component: AngularArticlesComponent
  },
  { path: 'typescript-articles', component: TypescriptArticlesComponent },
  { path: 'csharp-articles', component: CsharpArticlesComponent },
  { path: 'aspnetcore-articles', component: NetcoreArticlesComponent },
 

  // {
  //   path: 'html-articles',
  //   component: HtmlArticlesComponent,
  //   children: [
  //     { path: ':ID', component: HtmlArticlesNewwindowComponent }
  //   ]
  // },
  // {
  //   path: 'javascript-articles',
  //   component: JavascriptArticlesComponent,
  //   children: [
  //     { path: ':ID', component: JsItemArticleComponent }
  //   ]
  // }
  { path: 'html-articles', component: HtmlArticlesComponent },
  {
    path: 'html-articles/:ID',
    component: HtmlItemArticleComponent
  },
  {
    path: 'javascript-articles',
    component: JavascriptArticlesComponent
  },
  {
    path: 'javascript-articles/:ID',
    component: JsItemArticleComponent
  }
];

// {
//   path: 'javascript-articles',
//   component: JavascriptArticlesComponent
// },
// {
//   path: 'javascript-articles/:ID',
//   component: JsItemArticleComponent
// }
// {

@NgModule({
  imports: [RouterModule.forChild(appChildRoutes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }

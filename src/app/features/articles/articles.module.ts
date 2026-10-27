import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { HtmlArticlesComponent } from './html-articles/html-articles.component';
//import { HtmlArticlesNewwindosComponent } from './html-articles/html-articles-newwindos/html-articles-newwindos.component';
import { HtmlArticlesNewwindowComponent } from './html-articles/html-articles-newwindow/html-articles-newwindow.component';
import { JsItemArticleComponent } from './javascript-articles/js-item-article/js-item-article.component';
import { JSArticleService } from './javascript-articles/javascript-article.service';
import { HtmlItemArticleComponent } from './html-articles/html-item-article/html-item-article.component';

@NgModule({
  declarations: [
    HtmlArticlesComponent,
    HtmlArticlesNewwindowComponent,
    JsItemArticleComponent,
    HtmlItemArticleComponent,
    
  ],
  providers:[JSArticleService],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    
  ]
})


export class ArticlesModule {


 }

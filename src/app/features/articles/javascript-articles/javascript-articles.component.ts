import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Prism from 'prismjs';
import { JSArticleService } from './javascript-article.service';

@Component({
  selector: 'app-javascript-articles',
  templateUrl: './javascript-articles.component.html',
  styleUrls: ['./javascript-articles.component.css']
})
export class JavascriptArticlesComponent implements AfterViewInit, OnInit {

  constructor(private jsarticleitemService : JSArticleService, private activateRoute: ActivatedRoute, private router: Router, private http: HttpClient) {

  }

  topics: any[] = []

  ngOnInit(): void {
    //https://misardcourses.azurewebsites.net/assets/db-javascript-articles.json

    //db-javascript-articles.json
    this.http.get<any[]>('assets/db-javascript-articles.json').subscribe(data => {
      this.topics = data;
      console.log(this.topics); // You can see the data in the console
    });

    //assets/db-javascript-articles.json
    // this.http.get<any[]>('db/html-articles.json').subscribe(data => {
    //   this.topics = data;
    //   console.log(this.topics); // You can see the data in the console
    // });


  }



  code = `function helloWorld() {
            console.log('Hello, world!');
          }`;

  windowID = '';
  openNewWindow(ID: string) {
    this.windowID = ID;
    this.router.navigate(["/javascript-articles/1"]);
  }

  ngAfterViewInit(): void {
    Prism.highlightAll()
  }

  navigate(item: any) {
    this.jsarticleitemService.articleItemData(item);
    this.router.navigate(['/articles/javascript-articles', item.ID]);
  }

}

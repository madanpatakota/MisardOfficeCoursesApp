import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HTMLArticleService } from './html-article-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-html-articles',
  templateUrl: './html-articles.component.html',
  styleUrls: ['./html-articles.component.css']
})
export class HtmlArticlesComponent implements OnInit {

  constructor(private http: HttpClient,public htmlService:HTMLArticleService, private activateRoute: ActivatedRoute, private router: Router) {

  }

  windowID = '';
  openNewWindow(ID: string) {
    this.windowID = ID;

    this.router.navigate(["/html-articles/1"]);

  }
  topics: any[] = []
  ngOnInit(): void {
    this.http.get<any[]>('assets/db-html-articles.json').subscribe(data => {
      this.topics = data;
      console.log(this.topics); // You can see the data in the console
    });

  }




  navigate(item:any){
    this.htmlService.articleItemData(item);
    this.router.navigate(['/articles/html-articles', item.ID]);
  }


}

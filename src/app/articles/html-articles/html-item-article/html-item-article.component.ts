import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTMLArticleService } from '../html-article-service';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-javascript'; 

@Component({
  selector: 'app-html-item-article',
  templateUrl: './html-item-article.component.html',
  styleUrls: ['./html-item-article.component.css']
})
export class HtmlItemArticleComponent implements OnInit , AfterViewInit {
  constructor(private route: ActivatedRoute, private htmlArticleservice: HTMLArticleService) { }
  item: any;
  ngOnInit(): void {
     // Subscribe to the service to get the data
     this.htmlArticleservice.getArticleItemData().subscribe(data => {
      this.item = data;
      console.log(this.item);
      // Optionally, you can also handle route parameters here if needed
      this.route.paramMap.subscribe(params => {
        const id = params.get('ID');
        // Use `id` to fetch data or perform additional operations
      });
    });
  }
  ngAfterViewInit(): void {
    Prism.highlightAll(); // Highlight code after view initialization
  }
  
  
 
}

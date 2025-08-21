import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JSArticleService } from '../javascript-article.service';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-javascript'; // Import JavaScript language support

@Component({
  selector: 'app-js-item-article',
  templateUrl: './js-item-article.component.html',
  styleUrls: ['./js-item-article.component.css']
})
export class JsItemArticleComponent implements OnInit , AfterViewInit {
  constructor(private route: ActivatedRoute, private jsArticleItemService: JSArticleService) { }
  item: any;
  ngOnInit(): void {

    // Subscribe to the service to get the data
    this.jsArticleItemService.getArticleItemData().subscribe(data => {
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


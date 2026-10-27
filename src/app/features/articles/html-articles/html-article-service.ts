
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({'providedIn':'root'})
export class HTMLArticleService {
  private articleItemSubject = new BehaviorSubject<any>(null);

  articleItemData(item: any) {
    this.articleItemSubject.next(item);
  }

  getArticleItemData() {
    return this.articleItemSubject.asObservable();
  }
}

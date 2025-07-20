
import { BehaviorSubject } from 'rxjs';


export class JSArticleService {
  private articleItemSubject = new BehaviorSubject<any>(null);

  articleItemData(item: any) {
    this.articleItemSubject.next(item);
  }

  getArticleItemData() {
    return this.articleItemSubject.asObservable();
  }
}

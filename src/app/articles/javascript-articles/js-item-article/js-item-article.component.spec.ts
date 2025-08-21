import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsItemArticleComponent } from './js-item-article.component';

describe('JsItemArticleComponent', () => {
  let component: JsItemArticleComponent;
  let fixture: ComponentFixture<JsItemArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsItemArticleComponent]
    });
    fixture = TestBed.createComponent(JsItemArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlItemArticleComponent } from './html-item-article.component';

describe('HtmlItemArticleComponent', () => {
  let component: HtmlItemArticleComponent;
  let fixture: ComponentFixture<HtmlItemArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlItemArticleComponent]
    });
    fixture = TestBed.createComponent(HtmlItemArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

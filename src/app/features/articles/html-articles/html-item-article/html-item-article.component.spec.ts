import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlItemArticleComponent } from './html-item-article.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('HtmlItemArticleComponent', () => {
  let component: HtmlItemArticleComponent;
  let fixture: ComponentFixture<HtmlItemArticleComponent>;

  beforeEach(() => {
    configureComponentTest(HtmlItemArticleComponent);
    fixture = TestBed.createComponent(HtmlItemArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

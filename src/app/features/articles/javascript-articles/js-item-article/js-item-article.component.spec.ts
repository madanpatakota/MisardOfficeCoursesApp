import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsItemArticleComponent } from './js-item-article.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('JsItemArticleComponent', () => {
  let component: JsItemArticleComponent;
  let fixture: ComponentFixture<JsItemArticleComponent>;

  beforeEach(() => {
    configureComponentTest(JsItemArticleComponent);
    fixture = TestBed.createComponent(JsItemArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

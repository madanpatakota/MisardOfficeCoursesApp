import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlArticlesComponent } from './html-articles.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('HtmlArticlesComponent', () => {
  let component: HtmlArticlesComponent;
  let fixture: ComponentFixture<HtmlArticlesComponent>;

  beforeEach(() => {
    configureComponentTest(HtmlArticlesComponent);
    fixture = TestBed.createComponent(HtmlArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

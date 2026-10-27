import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlArticlesNewwindowComponent } from './html-articles-newwindow.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('HtmlArticlesNewwindowComponent', () => {
  let component: HtmlArticlesNewwindowComponent;
  let fixture: ComponentFixture<HtmlArticlesNewwindowComponent>;

  beforeEach(() => {
    configureComponentTest(HtmlArticlesNewwindowComponent);
    fixture = TestBed.createComponent(HtmlArticlesNewwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

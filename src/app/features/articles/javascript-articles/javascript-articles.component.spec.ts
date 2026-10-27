import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptArticlesComponent } from './javascript-articles.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('JavascriptArticlesComponent', () => {
  let component: JavascriptArticlesComponent;
  let fixture: ComponentFixture<JavascriptArticlesComponent>;

  beforeEach(() => {
    configureComponentTest(JavascriptArticlesComponent);
    fixture = TestBed.createComponent(JavascriptArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBeginnersComponent } from './html-beginners.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('HtmlBeginnersComponent', () => {
  let component: HtmlBeginnersComponent;
  let fixture: ComponentFixture<HtmlBeginnersComponent>;

  beforeEach(() => {
    configureComponentTest(HtmlBeginnersComponent);
    fixture = TestBed.createComponent(HtmlBeginnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

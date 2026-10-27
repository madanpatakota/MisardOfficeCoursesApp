import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesMainComponent } from './courses-main.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('CoursesMainComponent', () => {
  let component: CoursesMainComponent;
  let fixture: ComponentFixture<CoursesMainComponent>;

  beforeEach(() => {
    configureComponentTest(CoursesMainComponent);
    fixture = TestBed.createComponent(CoursesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

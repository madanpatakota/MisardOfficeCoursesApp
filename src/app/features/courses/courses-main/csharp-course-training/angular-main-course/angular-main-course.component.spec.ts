import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMainCourseComponent } from './angular-main-course.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('AngularMainCourseComponent', () => {
  let component: AngularMainCourseComponent;
  let fixture: ComponentFixture<AngularMainCourseComponent>;

  beforeEach(() => {
    configureComponentTest(AngularMainCourseComponent);
    fixture = TestBed.createComponent(AngularMainCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsharpCourseTrainingComponent } from './csharp-course-training.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('CsharpTrainingComponent', () => {
  let component: CsharpCourseTrainingComponent;
  let fixture: ComponentFixture<CsharpCourseTrainingComponent>;

  beforeEach(() => {
    configureComponentTest(CsharpCourseTrainingComponent);
    fixture = TestBed.createComponent(CsharpCourseTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

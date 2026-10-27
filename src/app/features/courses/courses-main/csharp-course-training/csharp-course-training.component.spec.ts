import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsharpCourseTrainingComponent } from './csharp-course-training.component';

describe('CsharpTrainingComponent', () => {
  let component: CsharpCourseTrainingComponent;
  let fixture: ComponentFixture<CsharpCourseTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsharpCourseTrainingComponent]
    });
    fixture = TestBed.createComponent(CsharpCourseTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

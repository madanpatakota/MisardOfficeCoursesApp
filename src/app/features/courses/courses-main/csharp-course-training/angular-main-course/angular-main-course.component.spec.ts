import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMainCourseComponent } from './angular-main-course.component';

describe('AngularMainCourseComponent', () => {
  let component: AngularMainCourseComponent;
  let fixture: ComponentFixture<AngularMainCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularMainCourseComponent]
    });
    fixture = TestBed.createComponent(AngularMainCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

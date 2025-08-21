import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptTrainingComponent } from './javascript-training.component';

describe('JavascriptComponent', () => {
  let component: JavascriptTrainingComponent;
  let fixture: ComponentFixture<JavascriptTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavascriptTrainingComponent]
    });
    fixture = TestBed.createComponent(JavascriptTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

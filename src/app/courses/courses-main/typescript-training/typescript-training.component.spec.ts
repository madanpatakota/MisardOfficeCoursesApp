import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptTrainingComponent } from './typescript-training.component';

describe('TypescriptTrainingComponent', () => {
  let component: TypescriptTrainingComponent;
  let fixture: ComponentFixture<TypescriptTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypescriptTrainingComponent]
    });
    fixture = TestBed.createComponent(TypescriptTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

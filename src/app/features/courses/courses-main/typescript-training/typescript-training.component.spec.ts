import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptTrainingComponent } from './typescript-training.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('TypescriptTrainingComponent', () => {
  let component: TypescriptTrainingComponent;
  let fixture: ComponentFixture<TypescriptTrainingComponent>;

  beforeEach(() => {
    configureComponentTest(TypescriptTrainingComponent);
    fixture = TestBed.createComponent(TypescriptTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

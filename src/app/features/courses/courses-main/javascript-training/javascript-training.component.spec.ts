import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptTrainingComponent } from './javascript-training.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('JavascriptComponent', () => {
  let component: JavascriptTrainingComponent;
  let fixture: ComponentFixture<JavascriptTrainingComponent>;

  beforeEach(() => {
    configureComponentTest(JavascriptTrainingComponent);
    fixture = TestBed.createComponent(JavascriptTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

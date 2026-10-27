import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspnetcoreComponent } from './aspnetcore.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('AspnetcoreComponent', () => {
  let component: AspnetcoreComponent;
  let fixture: ComponentFixture<AspnetcoreComponent>;

  beforeEach(() => {
    configureComponentTest(AspnetcoreComponent);
    fixture = TestBed.createComponent(AspnetcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

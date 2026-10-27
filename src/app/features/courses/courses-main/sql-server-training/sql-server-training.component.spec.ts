import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlServerTrainingComponent } from './sql-server-training.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('SqlServerTrainingComponent', () => {
  let component: SqlServerTrainingComponent;
  let fixture: ComponentFixture<SqlServerTrainingComponent>;

  beforeEach(() => {
    configureComponentTest(SqlServerTrainingComponent);
    fixture = TestBed.createComponent(SqlServerTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

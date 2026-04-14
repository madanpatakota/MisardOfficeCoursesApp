import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlServerTrainingComponent } from './sql-server-training.component';

describe('SqlServerTrainingComponent', () => {
  let component: SqlServerTrainingComponent;
  let fixture: ComponentFixture<SqlServerTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqlServerTrainingComponent]
    });
    fixture = TestBed.createComponent(SqlServerTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

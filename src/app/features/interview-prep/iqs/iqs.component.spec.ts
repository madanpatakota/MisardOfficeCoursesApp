import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IqsComponent } from './iqs.component';

describe('IqsComponent', () => {
  let component: IqsComponent;
  let fixture: ComponentFixture<IqsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IqsComponent]
    });
    fixture = TestBed.createComponent(IqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBeginnersComponent } from './html-beginners.component';

describe('HtmlBeginnersComponent', () => {
  let component: HtmlBeginnersComponent;
  let fixture: ComponentFixture<HtmlBeginnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlBeginnersComponent]
    });
    fixture = TestBed.createComponent(HtmlBeginnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

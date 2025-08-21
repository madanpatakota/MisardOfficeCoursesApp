import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLazyLoadComponent } from './img-lazy-load.component';

describe('ImgLazyLoadComponent', () => {
  let component: ImgLazyLoadComponent;
  let fixture: ComponentFixture<ImgLazyLoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgLazyLoadComponent]
    });
    fixture = TestBed.createComponent(ImgLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

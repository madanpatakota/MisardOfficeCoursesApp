import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsharpArticlesComponent } from './csharp-articles.component';

describe('CsharpArticlesComponent', () => {
  let component: CsharpArticlesComponent;
  let fixture: ComponentFixture<CsharpArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsharpArticlesComponent]
    });
    fixture = TestBed.createComponent(CsharpArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

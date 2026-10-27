import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { configureComponentTest } from 'src/app/testing/component-test-setup';

describe('AppComponent', () => {
  beforeEach(() => configureComponentTest(AppComponent));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Misard-Courses-App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Misard-Courses-App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content-wrapper')).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetYourMentorsComponent } from './meet-your-mentors.component';

describe('MeetYourMentorsComponent', () => {
  let component: MeetYourMentorsComponent;
  let fixture: ComponentFixture<MeetYourMentorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetYourMentorsComponent]
    });
    fixture = TestBed.createComponent(MeetYourMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

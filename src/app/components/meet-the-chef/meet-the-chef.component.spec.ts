import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheChefComponent } from './meet-the-chef.component';

describe('MeetTheChefComponent', () => {
  let component: MeetTheChefComponent;
  let fixture: ComponentFixture<MeetTheChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetTheChefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetTheChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

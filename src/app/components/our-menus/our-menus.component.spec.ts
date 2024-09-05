import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMenusComponent } from './our-menus.component';

describe('OurMenusComponent', () => {
  let component: OurMenusComponent;
  let fixture: ComponentFixture<OurMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurMenusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

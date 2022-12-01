import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponentAboutUsComponent } from './landing-page-component-about-us.component';

describe('LandingPageComponentAboutUsComponent', () => {
  let component: LandingPageComponentAboutUsComponent;
  let fixture: ComponentFixture<LandingPageComponentAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponentAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponentAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponentTestimonialComponent } from './landing-page-component-testimonial.component';

describe('LandingPageComponentTestimonialComponent', () => {
  let component: LandingPageComponentTestimonialComponent;
  let fixture: ComponentFixture<LandingPageComponentTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponentTestimonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponentTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

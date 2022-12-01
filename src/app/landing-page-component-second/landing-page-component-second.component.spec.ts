import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponentSecondComponent } from './landing-page-component-second.component';

describe('LandingPageComponentSecondComponent', () => {
  let component: LandingPageComponentSecondComponent;
  let fixture: ComponentFixture<LandingPageComponentSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponentSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponentSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

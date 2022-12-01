import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponentFirstComponent } from './landing-page-component-first.component';

describe('LandingPageComponentFirstComponent', () => {
  let component: LandingPageComponentFirstComponent;
  let fixture: ComponentFixture<LandingPageComponentFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponentFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponentFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

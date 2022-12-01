import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';

import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { LandingPageComponentFirstComponent } from './landing-page-component-first/landing-page-component-first.component';
import { BackgroundDesignComponent } from './background-design/background-design.component';
import { LandingPageComponentSecondComponent } from './landing-page-component-second/landing-page-component-second.component';
import { LandingPageComponentAboutUsComponent } from './landing-page-component-about-us/landing-page-component-about-us.component';
import { LandingPageComponentTestimonialComponent } from './landing-page-component-testimonial/landing-page-component-testimonial.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    PageFooterComponent,
    PageNotFoundComponent,
    AppNavbarComponent,
    LandingPageComponent,
    FilterPipe,
    LandingPageComponentFirstComponent,
    BackgroundDesignComponent,
    LandingPageComponentSecondComponent,
    LandingPageComponentAboutUsComponent,
    LandingPageComponentTestimonialComponent,
    LoginPageComponent,
    SignupComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: LandingPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

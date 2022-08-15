import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriberLandingPageComponent } from './subscriber/subscriber-landing-page/subscriber-landing-page.component';
import { SubscriberDetailsPageComponent } from './subscriber/subscriber-details-page/subscriber-details-page.component';
import { CityLandingPageComponent } from './city/city-landing-page/city-landing-page.component';
import { PublicationsLandingPageComponent } from './publication/publications-landing-page/publications-landing-page.component';
import { SubscriptionTypesLandingComponent } from './subscription_type/subscription-types-landing/subscription-types-landing.component';
import { UserLandingPageComponent } from './user/user-landing-page/user-landing-page.component';
import { SubscriberInputPageComponent } from './subscriber/subscriber-input-page/subscriber-input-page.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeLayoutComponent } from './common/layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './common/layouts/login-layout/login-layout.component';
import { AuthGuardService } from './auth/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: 'subscriber/:mode/:id', component: SubscriberInputPageComponent },
      { path: 'subscriber/:mode', component: SubscriberInputPageComponent },
      { path: 'subscribers/:id', component: SubscriberDetailsPageComponent },
      { path: 'subscribers', component: SubscriberLandingPageComponent },
      { path: 'cities', component: CityLandingPageComponent },
      { path: 'publications', component: PublicationsLandingPageComponent },
      {
        path: 'subscription-types',
        component: SubscriptionTypesLandingComponent,
      },
      { path: 'users', component: UserLandingPageComponent },
      { path: '', redirectTo: 'subscribers', pathMatch: 'full' },
    ],
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

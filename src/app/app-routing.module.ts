import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SubscriberLandingPageComponent} from "./subscriber/subscriber-landing-page/subscriber-landing-page.component";
import {SubscriberDetailsPageComponent} from "./subscriber/subscriber-details-page/subscriber-details-page.component";
import {CityLandingPageComponent} from "./city/city-landing-page/city-landing-page.component";
import {
  PublicationsLandingPageComponent
} from "./publication/publications-landing-page/publications-landing-page.component";
import {
  SubscriptionTypesLandingComponent
} from "./subscription_type/subscription-types-landing/subscription-types-landing.component";
import {UserLandingPageComponent} from "./user/user-landing-page/user-landing-page.component";
import {SubscriberInputPageComponent} from "./subscriber/subscriber-input-page/subscriber-input-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'subscribers', pathMatch: 'full'},
  {path: 'subscribers', component: SubscriberLandingPageComponent},
  {path: 'subscribers/:id', component: SubscriberDetailsPageComponent},
  {path: 'subscriber/:mode', component: SubscriberInputPageComponent},
  {path: 'subscriber/:mode/:id', component: SubscriberInputPageComponent},
  {path: 'cities', component: CityLandingPageComponent},
  {path: 'publications', component: PublicationsLandingPageComponent},
  {path: 'subscription-types', component: SubscriptionTypesLandingComponent},
  {path: 'users', component: UserLandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

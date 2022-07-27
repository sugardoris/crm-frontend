import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SidenavContentComponent } from './common/sidenav-content/sidenav-content.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { SubscriberTableComponent } from './subscriber/components/subscriber-table/subscriber-table.component';
import {MatTableModule} from "@angular/material/table";
import { SubscriberLandingPageComponent } from './subscriber/subscriber-landing-page/subscriber-landing-page.component';
import { SubscriberSearchComponent } from './subscriber/components/subscriber-search/subscriber-search.component';
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import { SubscriberDetailsPageComponent } from './subscriber/subscriber-details-page/subscriber-details-page.component';
import {MatTabsModule} from "@angular/material/tabs";
import { SubscriberInfoComponent } from './subscriber/components/subscriber-info/subscriber-info.component';
import { SubscriptionsComponent } from './subscriber/components/subscriptions/subscriptions.component';
import { SubscriberTicketsComponent } from './subscriber/components/subscriber-tickets/subscriber-tickets.component';
import { SubscriberPaymentsComponent } from './subscriber/components/subscriber-payments/subscriber-payments.component';
import {MatCardModule} from "@angular/material/card";
import { CityTableComponent } from './city/components/city-table/city-table.component';
import { CitySearchComponent } from './city/components/city-search/city-search.component';
import { CityLandingPageComponent } from './city/city-landing-page/city-landing-page.component';
import { UserLandingPageComponent } from './user/user-landing-page/user-landing-page.component';
import { UserTableComponent } from './user/components/user-table/user-table.component';
import { UserSearchComponent } from './user/components/user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavContentComponent,
    SubscriberTableComponent,
    SubscriberLandingPageComponent,
    SubscriberSearchComponent,
    SubscriberDetailsPageComponent,
    SubscriberInfoComponent,
    SubscriptionsComponent,
    SubscriberTicketsComponent,
    SubscriberPaymentsComponent,
    CityTableComponent,
    CitySearchComponent,
    CityLandingPageComponent,
    UserLandingPageComponent,
    UserTableComponent,
    UserSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

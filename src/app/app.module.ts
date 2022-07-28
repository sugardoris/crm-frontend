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
import { PublicationsLandingPageComponent } from './publication/publications-landing-page/publications-landing-page.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { PublicationTableComponent } from './publication/components/publication-table/publication-table.component';
import {MatMenuModule} from "@angular/material/menu";
import { SubscriberInputPageComponent } from './subscriber/subscriber-input-page/subscriber-input-page.component';
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { PublicationsInputPageComponent } from './publication/publications-input-page/publications-input-page.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import { UserInputDialogComponent } from './user/components/user-input-dialog/user-input-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { SubscriptionInputComponent } from './subscriber/components/subscription-input/subscription-input.component';
import { TicketInputComponent } from './subscriber/components/ticket-input/ticket-input.component';
import { SubscriptionDetailsComponent } from './subscriber/components/subscription-details/subscription-details.component';
import { TicketDetailsComponent } from './subscriber/components/ticket-details/ticket-details.component';

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
    PublicationsLandingPageComponent,
    PublicationTableComponent,
    SubscriberInputPageComponent,
    PublicationsInputPageComponent,
    UserInputDialogComponent,
    SubscriptionInputComponent,
    TicketInputComponent,
    SubscriptionDetailsComponent,
    TicketDetailsComponent,
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
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { SubscriberTableComponent } from './subscriber/subscriber-table/subscriber-table.component';
import {MatTableModule} from "@angular/material/table";
import { SubscriberLandingPageComponent } from './subscriber/subscriber-landing-page/subscriber-landing-page.component';
import { SubscriberSearchComponent } from './subscriber/subscriber-search/subscriber-search.component';
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import { SubscriberDetailsPageComponent } from './subscriber/subscriber-details-page/subscriber-details-page.component';
import {MatTabsModule} from "@angular/material/tabs";
import { SubscriberInfoComponent } from './subscriber/subscriber-info/subscriber-info.component';
import { SubscriptionsComponent } from './subscriber/subscriptions/subscriptions.component';
import { SubscriberTicketsComponent } from './subscriber/subscriber-tickets/subscriber-tickets.component';
import { SubscriberPaymentsComponent } from './subscriber/subscriber-payments/subscriber-payments.component';
import {MatCardModule} from "@angular/material/card";

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

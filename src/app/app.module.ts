import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavContentComponent } from './common/sidenav-content/sidenav-content.component';
import { SubscriberTableComponent } from './subscriber/components/subscriber/subscriber-table/subscriber-table.component';
import { SubscriberLandingPageComponent } from './subscriber/subscriber-landing-page/subscriber-landing-page.component';
import { SubscriberDetailsPageComponent } from './subscriber/subscriber-details-page/subscriber-details-page.component';
import { SubscriberInfoComponent } from './subscriber/components/subscriber/subscriber-info/subscriber-info.component';
import { SubscriptionsTableComponent } from './subscriber/components/subscription/subscriptions-table/subscriptions-table.component';
import { SubscriberTicketsComponent } from './subscriber/components/ticket/subscriber-tickets/subscriber-tickets.component';
import { CityTableComponent } from './city/components/city-table/city-table.component';
import { CityLandingPageComponent } from './city/city-landing-page/city-landing-page.component';
import { UserLandingPageComponent } from './user/user-landing-page/user-landing-page.component';
import { UserTableComponent } from './user/components/user-table/user-table.component';
import { PublicationsLandingPageComponent } from './publication/publications-landing-page/publications-landing-page.component';
import { PublicationTableComponent } from './publication/components/publication-table/publication-table.component';
import { SubscriberInputPageComponent } from './subscriber/subscriber-input-page/subscriber-input-page.component';
import { UserInputDialogComponent } from './user/components/user-input-dialog/user-input-dialog.component';
import { SubscriptionInputComponent } from './subscriber/components/subscription/subscription-input/subscription-input.component';
import { TicketInputComponent } from './subscriber/components/ticket/ticket-input/ticket-input.component';
import { SubscriptionDetailsComponent } from './subscriber/components/subscription/subscription-details/subscription-details.component';
import { TicketDetailsComponent } from './subscriber/components/ticket/ticket-details/ticket-details.component';
import { LoginComponent } from './auth/login/login.component';
import { SubscriptionTypesLandingComponent } from './subscription_type/subscription-types-landing/subscription-types-landing.component';
import { SubscriptionTypeTableComponent } from './subscription_type/components/subscription-type-table/subscription-type-table.component';
import { SubscriptionTypeInputComponent } from './subscription_type/components/subscription-type-input/subscription-type-input.component';
import { PublicationInputComponent } from './publication/components/publication-input/publication-input.component';
import { LoginLayoutComponent } from './common/layouts/login-layout/login-layout.component';
import { HomeLayoutComponent } from './common/layouts/home-layout/home-layout.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';
import { AuthExpiredInterceptor } from './auth/interceptors/auth-expired.interceptor';
import { ActionModalComponent } from './common/action-modal/action-modal.component';
import { UserDetailsComponent } from './user/components/user-details/user-details.component';
import { PublicationDetailsComponent } from './publication/components/publication-details/publication-details.component';
import { SubscriptionTypeDetailsComponent } from './subscription_type/components/subscription-type-details/subscription-type-details.component';
import { ContentHeaderComponent } from './common/content-header/content-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavContentComponent,
    SubscriberTableComponent,
    SubscriberLandingPageComponent,
    SubscriberDetailsPageComponent,
    SubscriberInfoComponent,
    SubscriptionsTableComponent,
    SubscriberTicketsComponent,
    CityTableComponent,
    CityLandingPageComponent,
    UserLandingPageComponent,
    UserTableComponent,
    PublicationsLandingPageComponent,
    PublicationTableComponent,
    SubscriberInputPageComponent,
    UserInputDialogComponent,
    SubscriptionInputComponent,
    TicketInputComponent,
    SubscriptionDetailsComponent,
    TicketDetailsComponent,
    LoginComponent,
    SubscriptionTypesLandingComponent,
    SubscriptionTypeTableComponent,
    SubscriptionTypeInputComponent,
    PublicationInputComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    ActionModalComponent,
    UserDetailsComponent,
    PublicationDetailsComponent,
    SubscriptionTypeDetailsComponent,
    ContentHeaderComponent,
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
    MatDialogModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

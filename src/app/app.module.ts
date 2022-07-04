import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SidenavContentComponent } from './common/sidenav-content/sidenav-content.component';
import { HeaderComponent } from './common/header/header.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    SidenavContentComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

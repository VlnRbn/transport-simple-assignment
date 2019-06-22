import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { TravelTrackModule } from 'projects/travel-track/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TravelTrackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

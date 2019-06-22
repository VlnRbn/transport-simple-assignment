import { NgModule } from '@angular/core';
import { TravelTrackComponent } from './travel-track.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TravelTrackComponent],
  imports: [
    CommonModule
  ],
  exports: [TravelTrackComponent]
})
export class TravelTrackModule { }

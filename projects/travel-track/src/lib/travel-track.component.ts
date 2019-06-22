import { Component, OnInit, Input } from "@angular/core";
import { TripInputs, Trip } from "../common/models";
import { TravelTrackService } from "./travel-track.service";

@Component({
  selector: "lib-travel-track",
  templateUrl: "./travel-track.component.html",
  styles: [
    `
      :host {
        display: flex;
        height: 250px;
        overflow-x: auto;
        padding-left: 20px;
        padding-right: 20px;
        background: #f5f5f5;
      }
      circle {
        stroke: #00E676;
        cursor: pointer;
        fill: #fff;
        stroke-width: 2px;
      }

      .ad-Path {
        fill: none;
        stroke: #555;
        stroke-width: 2px;
        stroke-linecap: round;
      }

      .location-name {
        font-size: 10px;
        text-transform: uppercase;
        fill: #fb4860;
      }
    `
  ]
})
export class TravelTrackComponent implements OnInit {
  trips: Trip[];

  @Input()
  set tripInputs(tripInputs: TripInputs[]) {
    console.log(tripInputs);

    this.trips = this.travelTrackService.buildTrips(tripInputs);
  }

  constructor(private travelTrackService: TravelTrackService) {}

  ngOnInit() {}
}

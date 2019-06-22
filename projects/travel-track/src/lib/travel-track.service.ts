import { Injectable } from "@angular/core";
import { TripInputs } from "../common/models";
import { Trip } from "../common/models";

@Injectable({
  providedIn: "root"
})
export class TravelTrackService {
  constructor() {}

  buildTrips(tripInputs: TripInputs[]) {
    if (tripInputs.length == 0) return [];
    const trips = tripInputs.map<Trip>(el => {
      return { ...el, line: "simpleLine", elevated: false };
    });
    if (tripInputs.length == 1) {
      trips[0].line = "endNode";
      return trips
    }
    if (trips[0].start == trips[1].start && trips[0].destination == trips[1].destination) {
      trips[0].elevated = true;
      trips[1].elevated = true;
    }

    for (let i = 1; i < trips.length - 1; i++) {
      const prev = trips[i - 1];
      const cur = trips[i];
      const next = trips[i + 1];

      if (!cur.elevated) {
        //check if elevated
        if (cur.start == next.start && cur.destination == next.destination && prev.line !== "splineDown") {
          cur.elevated = true;
          next.elevated = true;

          if (!prev.elevated) {
            prev.line = "splineUp";
          }
        }
        //choose if current chould be arrow
        else if (cur.start == prev.destination ) {
          cur.line = "arrowLine";
        }
      } else {
        if (cur.start == next.start && cur.destination == next.destination) {
          next.elevated = true;
        } else {
          cur.line = "splineDown";
          debugger
          cur.elevated = false;
          next.elevated = false;
        }
      }
    }

    //last node
    trips[trips.length - 1].line = "endNode";

    return trips;
  }
}

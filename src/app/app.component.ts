import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormArray } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { TripInputs } from "travel-track";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-asignment";
  tripInputs: Array<TripInputs> = [];

  tripForm: FormArray;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tripForm = this.fb.array([]);

    this.tripForm.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      if (this.tripForm.valid) {
        this.tripInputs = value;
      }
    });

    this.loadTripData();
  }

  addTrip(start = "", destination = "" ) {
    
    this.tripForm.push(
      this.fb.group(
        {
          start: [
            start,
            Validators.compose([Validators.required, Validators.minLength(3)])
          ],
          destination: [
            destination,
            Validators.compose([Validators.required, Validators.minLength(3)])
          ]
        },
        { validators: this.validateTripLocations }
      )
    );
  }

  getTripForm(i) {
    return this.tripForm.controls[i] as FormGroup;
  }

  removeTrip(i) {
    this.tripForm.removeAt(i);
  }

  /**
   * @description custom validator for Trip Form group
   * @check if start and destination are eual
   * @param group
   */
  validateTripLocations(group: FormGroup) {
    let start = group.controls.start.value;
    let destination = group.controls.destination.value;
    return start !== destination ? null : { same: true };
  }

  loadTripData() {
    const arr = [
      {
        start: "hydrabad",
        destination: "checnnai"
      },
      {
        start: "checnnai",
        destination: "hydrabad"
      },
      {
        start: "delhi",
        destination: "hydrabad"
      },
      {
        start: "bangalore",
        destination: "hydrabad"
      },
      {
        start: "bangalore",
        destination: "hydrabad"
      },
      {
        start: "checnnai",
        destination: "hydrabad"
      },
      {
        start: "checnnai",
        destination: "kolkata"
      }
    ];

    arr.forEach(el => {
      this.addTrip(el.start, el.destination)
    });

  }
}

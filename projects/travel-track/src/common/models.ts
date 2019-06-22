export type line = "simpleLine" | "arrowLine" | "splineUp" | "splineDown" | "endNode";

export interface TripInputs {
  start: string;
  destination: string;
}

export interface Trip extends TripInputs{
  line: line;
  elevated: boolean;
}


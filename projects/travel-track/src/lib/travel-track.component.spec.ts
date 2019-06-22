import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTrackComponent } from './travel-track.component';

describe('TravelTrackComponent', () => {
  let component: TravelTrackComponent;
  let fixture: ComponentFixture<TravelTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

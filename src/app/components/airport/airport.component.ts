import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import StationState from 'src/app/models/stationState';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css'],
})
export class AirportComponent implements OnInit {
  stations: StationState[] = [];

  constructor(public http: HttpClient) {}

  init = () => {
    this.http
      .get('https://localhost:7160/api/airport/init')
      .subscribe((x) => console.log(x));
  };
  ngOnInit() {
    this.http
      .get('https://localhost:7160/api/airport/current-state')
      .subscribe((x) => {
        this.stations = x as StationState[];
        console.log(x);
      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import StationState from 'src/app/models/stationState';

@Component({
  selector: 'app-tablestate',
  templateUrl: './tablestate.component.html',
  styleUrls: ['./tablestate.component.css']
})
export class TablestateComponent implements OnInit{
  stations: StationState [] =[]
  constructor (public http: HttpClient){}
  ngOnInit(): void {
    this.http.get('https://localhost:7160/api/airport/current-state').subscribe(data => {console.log(data); this.stations = data as StationState[]});
  }

}

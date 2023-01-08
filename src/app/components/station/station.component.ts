import { Component, Input, OnInit } from '@angular/core';
import Plane from 'src/app/models/plane';
import SrService from 'src/app/services/sr.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css'],
})
export class StationComponent implements OnInit {
  @Input() stationName!: string;
  @Input() currentPlane?: Plane;
  public sr: SrService = new SrService();
  constructor() {}
  ngOnInit(): void {
    if (this.currentPlane) this.sr.data = this.currentPlane;
    this.sr.startConnection();
    this.sr.addTransferChartDataListener(this.stationName);
  }
}

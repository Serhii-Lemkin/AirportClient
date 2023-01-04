import { Component, Input, OnInit } from '@angular/core';
import SrService from 'src/app/services/sr.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css'],
})
export class StationComponent implements OnInit {
  @Input() stationName!: string;
  public sr: SrService = new SrService;
  constructor() {}
  ngOnInit(): void {
    this.sr.startConnection();
    this.sr.addTransferChartDataListener(this.stationName);
  }
}

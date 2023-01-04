import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Plane from '../../models/plane';
import UpdateTableService from 'src/app/services/updatetableservice';

@Component({
  selector: 'app-tableoutcoming',
  templateUrl: './tableoutcoming.component.html',
  styleUrls: ['./tableoutcoming.component.css'],
})
export class TableoutcomingComponent implements OnInit {
  constructor(public ls: UpdateTableService) {}
  ngOnInit(): void {
    this.ls.startConnection();
    this.ls.addTransferChartDataListener('takeoff');
    this.ls.getPlanes('https://localhost:7160/api/airport/takeoffs');
  }
}

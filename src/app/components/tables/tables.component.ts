import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Plane from '../../models/plane';
import UpdateTableService from 'src/app/services/updatetableservice';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  constructor(public http: HttpClient, public ls: UpdateTableService) {}
  ngOnInit(): void {
    this.ls.startConnection();
    this.ls.addTransferChartDataListener('land');
    this.ls.getPlanes('https://localhost:7160/api/airport/landings');
  }
}

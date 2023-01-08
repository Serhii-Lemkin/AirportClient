import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PlaneRecord from '../models/planerecord';
import PlaneData from '../models/planeData';

@Injectable({
  providedIn: 'root',
})
export class HistorydetalesService {
  plane?: PlaneData;
  data: PlaneRecord[] = [];
  constructor(public http: HttpClient) {}
  getRecords(name: string) {
    this.http
      .get('https://localhost:7160/api/database/records/' + name)
      .subscribe((data) => {
        this.data = data as PlaneRecord[];
        this.plane = new PlaneData();
        this.plane.planeName = this.data[0].planeName;
        this.plane.destination = this.data[0].destination;
      });
  }
}

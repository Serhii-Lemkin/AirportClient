import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PlaneData from '../models/planeData';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  data: PlaneData[] = [];
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.getPlanes();
  }
  getPlanes() {
    this.http
      .get('https://localhost:7160/api/database/planes')
      .subscribe((data) => (this.data = data as PlaneData[]));
  }
}

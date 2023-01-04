import { Injectable } from '@angular/core';
import Plane from '../models/plane';
import * as signalR from '@microsoft/signalr';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export default class UpdateTableService {
  constructor(public http: HttpClient) {}
  public planes: Plane[] = [];
  public data!: Plane;

  private hubConnection!: signalR.HubConnection;
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7160/airport')
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err) => console.log('Error while starting connection: ' + err));
  };

  public addTransferChartDataListener = (key: string) => {
    this.hubConnection.on(key, (data) => {
      this.data = data;
      console.log(data);
      let changed = false;

      for (let index = 0; index < this.planes.length; index++) {
        if (data.planeName == this.planes[index].planeName) {
          this.planes[index] = data;
          changed = true;
          if (this.planes[index].finished) {
            console.log(this.planes);
            this.planes.splice(index, 1);
            console.log(this.planes);
          }
        }
      }
      if (!changed) {
        this.planes.push(data);
      }
    });
  };
  public getPlanes(url:string) {
    this.http
      .get(url)
      .subscribe((data) => {
        console.log(data);
        this.planes = data as Plane[];
      });
  }
}

import { Injectable } from '@angular/core';
import Plane from '../models/plane';
import * as signalR from '@microsoft/signalr';
import { HttpClient } from '@angular/common/http';
import StationState from '../models/stationState';

@Injectable({
  providedIn: 'root',
})
export default class SrService {
  constructor() {}

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

  

  public addTransferChartDataListener = (station: string) => {
    this.hubConnection.on(station, (data) => {
      this.data = data;
      console.log(data);
    });
  };
}

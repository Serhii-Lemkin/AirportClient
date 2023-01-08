import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AirportComponent } from './components/airport/airport.component';
import { StationComponent } from './components/station/station.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TablesComponent } from './components/tables/tables.component';
import { routing } from 'src/app/routing.module';
import { NavComponent } from './components/nav/nav.component';
import { TableoutcomingComponent } from './components/tableoutcoming/tableoutcoming.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryDetailesComponent } from './components/history-detailes/history-detailes.component';

@NgModule({
  declarations: [
    AppComponent,
    AirportComponent,
    StationComponent,
    TablesComponent,
    NavComponent,
    TableoutcomingComponent,
    HistoryComponent,
    HistoryDetailesComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

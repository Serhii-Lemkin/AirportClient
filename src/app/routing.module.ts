import { Routes, RouterModule } from '@angular/router';
import { AirportComponent } from './components/airport/airport.component';
import { TablesComponent } from './components/tables/tables.component';
import { TableoutcomingComponent } from './components/tableoutcoming/tableoutcoming.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryDetailesComponent } from './components/history-detailes/history-detailes.component';

const appRoutes: Routes = [
  { path: '', component: AirportComponent },
  { path: 'table-inoming', component: TablesComponent },
  { path: 'table-outcoming', component: TableoutcomingComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'detales/:name', component: HistoryDetailesComponent },
];

export const routing = RouterModule.forRoot(appRoutes);

import { Routes, RouterModule } from '@angular/router';
import { AirportComponent } from './components/airport/airport.component';
import { TablesComponent } from './components/tables/tables.component';
import { TablestateComponent } from './components/tablestate/tablestate.component';
import { TableoutcomingComponent } from './components/tableoutcoming/tableoutcoming.component';

const appRoutes: Routes = [
  { path: '', component: AirportComponent },
  { path: 'table-inoming', component: TablesComponent },
  { path: 'table-outcoming', component: TableoutcomingComponent },
  { path: 'table-state', component: TablestateComponent },
];

export const routing = RouterModule.forRoot(appRoutes);

import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  constructor(public hs: HistoryService, public router: Router) {}
  ngOnInit(): void {}

  detales(name: string) {
    this.router.navigate([`detales/` + name]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HistorydetalesService } from 'src/app/services/historydetales.service';

@Component({
  selector: 'app-history-detailes',
  templateUrl: './history-detailes.component.html',
  styleUrls: ['./history-detailes.component.css'],
})
export class HistoryDetailesComponent implements OnInit {
  name!: string;

  constructor(
    public route: ActivatedRoute,
    public ds: HistorydetalesService,
    router: Router
  ) {
    let tmp = this.route.snapshot.paramMap.get('name');
    if (tmp) this.name = tmp;
    else router.navigate(['history']);
  }
  ngOnInit(): void {
    this.ds.getRecords(this.name)
  }
}

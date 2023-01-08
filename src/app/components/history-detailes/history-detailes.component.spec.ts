import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDetailesComponent } from './history-detailes.component';

describe('HistoryDetailesComponent', () => {
  let component: HistoryDetailesComponent;
  let fixture: ComponentFixture<HistoryDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryDetailesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

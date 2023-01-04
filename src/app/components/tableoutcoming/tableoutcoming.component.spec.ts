import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableoutcomingComponent } from './tableoutcoming.component';

describe('TableoutcomingComponent', () => {
  let component: TableoutcomingComponent;
  let fixture: ComponentFixture<TableoutcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableoutcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableoutcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablestateComponent } from './tablestate.component';

describe('TablestateComponent', () => {
  let component: TablestateComponent;
  let fixture: ComponentFixture<TablestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablestateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

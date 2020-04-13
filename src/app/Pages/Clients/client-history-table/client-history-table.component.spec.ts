import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHistoryTableComponent } from './client-history-table.component';

describe('ClientHistoryTableComponent', () => {
  let component: ClientHistoryTableComponent;
  let fixture: ComponentFixture<ClientHistoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientHistoryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

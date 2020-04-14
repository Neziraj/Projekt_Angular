import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTableComponent } from './clients.component';

describe('ClientsComponent', () => {
  let component: ClientsTableComponent;
  let fixture: ComponentFixture<ClientsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

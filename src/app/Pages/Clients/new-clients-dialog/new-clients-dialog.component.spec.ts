import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientsDialogComponent } from './new-clients-dialog.component';

describe('NewClientsDialogComponent', () => {
  let component: NewClientsDialogComponent;
  let fixture: ComponentFixture<NewClientsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClientsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClientsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientTableComponent } from './new-client-table.component';

describe('NewClientTableComponent', () => {
  let component: NewClientTableComponent;
  let fixture: ComponentFixture<NewClientTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClientTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClientTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

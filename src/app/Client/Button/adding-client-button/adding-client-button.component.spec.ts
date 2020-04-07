import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingClientButtonComponent } from './adding-client-button.component';

describe('AddingClientButtonComponent', () => {
  let component: AddingClientButtonComponent;
  let fixture: ComponentFixture<AddingClientButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingClientButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingClientButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

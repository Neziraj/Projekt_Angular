import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientButtonComponent } from './edit-client-button.component';

describe('EditClientButtonComponent', () => {
  let component: EditClientButtonComponent;
  let fixture: ComponentFixture<EditClientButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClientButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

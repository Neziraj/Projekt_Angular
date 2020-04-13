import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {navbarClientComponent} from './navbar.client.component';

describe('navbarClientComponent', () => {
  let component: navbarClientComponent;
  let fixture: ComponentFixture<navbarClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ navbarClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(navbarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

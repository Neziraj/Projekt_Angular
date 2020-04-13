import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarConfigComponent } from './navbar.config.component';

describe('NavbarComponent', () => {
  let component: NavbarConfigComponent;
  let fixture: ComponentFixture<NavbarConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

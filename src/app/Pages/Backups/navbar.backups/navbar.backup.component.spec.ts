import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupNavbarComponent } from './navbar.backup.component';

describe('BackupNavbarComponent', () => {
  let component: BackupNavbarComponent;
  let fixture: ComponentFixture<BackupNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

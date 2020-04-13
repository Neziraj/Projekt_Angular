import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingBackupComponent } from './incoming-backup.component';

describe('IncomingBackupsComponent', () => {
  let component: IncomingBackupComponent;
  let fixture: ComponentFixture<IncomingBackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingBackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedBackupComponent } from './completed-backup.component';

describe('CompletedBackupsComponent', () => {
  let component: CompletedBackupComponent;
  let fixture: ComponentFixture<CompletedBackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedBackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

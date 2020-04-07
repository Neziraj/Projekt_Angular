import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupDialogueComponent } from './backup-dialogue.component';

describe('BackupDialogueComponent', () => {
  let component: BackupDialogueComponent;
  let fixture: ComponentFixture<BackupDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

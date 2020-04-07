import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupPageComponent } from './backup-page.component';

describe('BackupPageComponent', () => {
  let component: BackupPageComponent;
  let fixture: ComponentFixture<BackupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

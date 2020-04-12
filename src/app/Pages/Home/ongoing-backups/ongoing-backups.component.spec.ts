import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingBackupsComponent } from './ongoing-backups.component';

describe('OngoingBackupsComponent', () => {
  let component: OngoingBackupsComponent;
  let fixture: ComponentFixture<OngoingBackupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingBackupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingBackupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

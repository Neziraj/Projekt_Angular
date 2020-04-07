import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDialogueComponent } from './event-dialogue.component';

describe('EventDialogueComponent', () => {
  let component: EventDialogueComponent;
  let fixture: ComponentFixture<EventDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

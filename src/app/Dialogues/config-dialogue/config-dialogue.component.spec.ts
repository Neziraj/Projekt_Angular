import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDialogueComponent } from './config-dialogue.component';

describe('ConfigDialogueComponent', () => {
  let component: ConfigDialogueComponent;
  let fixture: ComponentFixture<ConfigDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

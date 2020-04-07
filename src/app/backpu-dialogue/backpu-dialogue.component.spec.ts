import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpuDialogueComponent } from './backpu-dialogue.component';

describe('BackpuDialogueComponent', () => {
  let component: BackpuDialogueComponent;
  let fixture: ComponentFixture<BackpuDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackpuDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackpuDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

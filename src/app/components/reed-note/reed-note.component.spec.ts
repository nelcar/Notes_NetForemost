import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReedNoteComponent } from './reed-note.component';

describe('ReedNoteComponent', () => {
  let component: ReedNoteComponent;
  let fixture: ComponentFixture<ReedNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReedNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReedNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabrynthLordComponent } from './labrynth-lord.component';

describe('LabrynthLordComponent', () => {
  let component: LabrynthLordComponent;
  let fixture: ComponentFixture<LabrynthLordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabrynthLordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabrynthLordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

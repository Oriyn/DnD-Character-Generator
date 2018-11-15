import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADND2ndEdComponent } from './adnd2nd-ed.component';

describe('ADND2ndEdComponent', () => {
  let component: ADND2ndEdComponent;
  let fixture: ComponentFixture<ADND2ndEdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADND2ndEdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADND2ndEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

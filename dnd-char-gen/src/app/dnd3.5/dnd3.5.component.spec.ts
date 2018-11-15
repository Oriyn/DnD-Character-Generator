import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DND3.5Component } from './dnd3.5.component';

describe('DND3.5Component', () => {
  let component: DND3.5Component;
  let fixture: ComponentFixture<DND3.5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DND3.5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DND3.5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

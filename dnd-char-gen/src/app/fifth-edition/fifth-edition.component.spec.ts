import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthEditionComponent } from './fifth-edition.component';

describe('FifthEditionComponent', () => {
  let component: FifthEditionComponent;
  let fixture: ComponentFixture<FifthEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

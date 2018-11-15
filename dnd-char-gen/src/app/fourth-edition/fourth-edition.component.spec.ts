import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthEditionComponent } from './fourth-edition.component';

describe('FourthEditionComponent', () => {
  let component: FourthEditionComponent;
  let fixture: ComponentFixture<FourthEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

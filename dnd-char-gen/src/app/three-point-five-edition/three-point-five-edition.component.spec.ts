import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePointFiveEditionComponent } from './three-point-five-edition.component';

describe('ThreePointFiveEditionComponent', () => {
  let component: ThreePointFiveEditionComponent;
  let fixture: ComponentFixture<ThreePointFiveEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreePointFiveEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreePointFiveEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

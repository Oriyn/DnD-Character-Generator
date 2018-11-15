import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADNDComponent } from './adnd.component';

describe('ADNDComponent', () => {
  let component: ADNDComponent;
  let fixture: ComponentFixture<ADNDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADNDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADNDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

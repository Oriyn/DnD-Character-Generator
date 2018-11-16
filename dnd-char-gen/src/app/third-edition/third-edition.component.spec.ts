import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdEditionComponent } from './third-edition.component';

describe('ThirdEditionComponent', () => {
  let component: ThirdEditionComponent;
  let fixture: ComponentFixture<ThirdEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Productreview1Component } from './productreview1.component';

describe('Productreview1Component', () => {
  let component: Productreview1Component;
  let fixture: ComponentFixture<Productreview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Productreview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Productreview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

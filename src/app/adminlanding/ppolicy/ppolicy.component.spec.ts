import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpolicyComponent } from './ppolicy.component';

describe('PpolicyComponent', () => {
  let component: PpolicyComponent;
  let fixture: ComponentFixture<PpolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

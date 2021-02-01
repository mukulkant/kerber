import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderfailComponent } from './orderfail.component';

describe('OrderfailComponent', () => {
  let component: OrderfailComponent;
  let fixture: ComponentFixture<OrderfailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderfailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

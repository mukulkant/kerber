import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerreviewaComponent } from './sellerreviewa.component';

describe('SellerreviewaComponent', () => {
  let component: SellerreviewaComponent;
  let fixture: ComponentFixture<SellerreviewaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerreviewaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerreviewaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

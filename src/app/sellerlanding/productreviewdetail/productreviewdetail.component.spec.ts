import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductreviewdetailComponent } from './productreviewdetail.component';

describe('ProductreviewdetailComponent', () => {
  let component: ProductreviewdetailComponent;
  let fixture: ComponentFixture<ProductreviewdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductreviewdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductreviewdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

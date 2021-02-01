import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailclothComponent } from './productdetailcloth.component';

describe('ProductdetailclothComponent', () => {
  let component: ProductdetailclothComponent;
  let fixture: ComponentFixture<ProductdetailclothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetailclothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailclothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

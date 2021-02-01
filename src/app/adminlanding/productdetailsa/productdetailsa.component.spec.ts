import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailsaComponent } from './productdetailsa.component';

describe('ProductdetailsaComponent', () => {
  let component: ProductdetailsaComponent;
  let fixture: ComponentFixture<ProductdetailsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetailsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

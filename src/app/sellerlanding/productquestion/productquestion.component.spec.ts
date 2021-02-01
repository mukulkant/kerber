import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductquestionComponent } from './productquestion.component';

describe('ProductquestionComponent', () => {
  let component: ProductquestionComponent;
  let fixture: ComponentFixture<ProductquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

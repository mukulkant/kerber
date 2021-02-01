import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageproductreportaComponent } from './manageproductreporta.component';

describe('ManageproductreportaComponent', () => {
  let component: ManageproductreportaComponent;
  let fixture: ComponentFixture<ManageproductreportaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageproductreportaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageproductreportaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

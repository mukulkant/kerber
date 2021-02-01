import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecourierComponent } from './managecourier.component';

describe('ManagecourierComponent', () => {
  let component: ManagecourierComponent;
  let fixture: ComponentFixture<ManagecourierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecourierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

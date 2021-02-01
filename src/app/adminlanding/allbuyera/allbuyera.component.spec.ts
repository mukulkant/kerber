import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbuyeraComponent } from './allbuyera.component';

describe('AllbuyeraComponent', () => {
  let component: AllbuyeraComponent;
  let fixture: ComponentFixture<AllbuyeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbuyeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbuyeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

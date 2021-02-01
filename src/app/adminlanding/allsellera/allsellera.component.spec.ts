import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllselleraComponent } from './allsellera.component';

describe('AllselleraComponent', () => {
  let component: AllselleraComponent;
  let fixture: ComponentFixture<AllselleraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllselleraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllselleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

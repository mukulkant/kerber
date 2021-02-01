import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddofferaComponent } from './addoffera.component';

describe('AddofferaComponent', () => {
  let component: AddofferaComponent;
  let fixture: ComponentFixture<AddofferaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddofferaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddofferaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

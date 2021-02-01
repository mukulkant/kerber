import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageofferaComponent } from './manageoffera.component';

describe('ManageofferaComponent', () => {
  let component: ManageofferaComponent;
  let fixture: ComponentFixture<ManageofferaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageofferaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageofferaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagereturnComponent } from './managereturn.component';

describe('ManagereturnComponent', () => {
  let component: ManagereturnComponent;
  let fixture: ComponentFixture<ManagereturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagereturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagereturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

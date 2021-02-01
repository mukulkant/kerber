import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageorderaComponent } from './manageordera.component';

describe('ManageorderaComponent', () => {
  let component: ManageorderaComponent;
  let fixture: ComponentFixture<ManageorderaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageorderaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageorderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

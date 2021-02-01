import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesubsaComponent } from './managesubsa.component';

describe('ManagesubsaComponent', () => {
  let component: ManagesubsaComponent;
  let fixture: ComponentFixture<ManagesubsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesubsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesubsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

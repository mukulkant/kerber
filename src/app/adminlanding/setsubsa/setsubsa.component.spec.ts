import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsubsaComponent } from './setsubsa.component';

describe('SetsubsaComponent', () => {
  let component: SetsubsaComponent;
  let fixture: ComponentFixture<SetsubsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetsubsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsubsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

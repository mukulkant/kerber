import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpageaComponent } from './addpagea.component';

describe('AddpageaComponent', () => {
  let component: AddpageaComponent;
  let fixture: ComponentFixture<AddpageaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpageaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpageaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

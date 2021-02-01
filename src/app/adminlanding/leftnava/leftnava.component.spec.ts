import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftnavaComponent } from './leftnava.component';

describe('LeftnavaComponent', () => {
  let component: LeftnavaComponent;
  let fixture: ComponentFixture<LeftnavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftnavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftnavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

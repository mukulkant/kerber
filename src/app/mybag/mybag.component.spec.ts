import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybagComponent } from './mybag.component';

describe('MybagComponent', () => {
  let component: MybagComponent;
  let fixture: ComponentFixture<MybagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

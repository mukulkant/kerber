import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustreviewComponent } from './custreview.component';

describe('CustreviewComponent', () => {
  let component: CustreviewComponent;
  let fixture: ComponentFixture<CustreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

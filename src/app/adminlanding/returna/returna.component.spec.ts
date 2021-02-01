import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnaComponent } from './returna.component';

describe('ReturnaComponent', () => {
  let component: ReturnaComponent;
  let fixture: ComponentFixture<ReturnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportreviewaComponent } from './reportreviewa.component';

describe('ReportreviewaComponent', () => {
  let component: ReportreviewaComponent;
  let fixture: ComponentFixture<ReportreviewaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportreviewaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportreviewaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

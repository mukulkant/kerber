import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangsettingComponent } from './langsetting.component';

describe('LangsettingComponent', () => {
  let component: LangsettingComponent;
  let fixture: ComponentFixture<LangsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetemplateaComponent } from './managetemplatea.component';

describe('ManagetemplateaComponent', () => {
  let component: ManagetemplateaComponent;
  let fixture: ComponentFixture<ManagetemplateaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagetemplateaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetemplateaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

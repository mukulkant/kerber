import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlluseraComponent } from './allusera.component';

describe('AlluseraComponent', () => {
  let component: AlluseraComponent;
  let fixture: ComponentFixture<AlluseraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlluseraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlluseraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

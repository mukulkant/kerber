import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecategoryaComponent } from './managecategorya.component';

describe('ManagecategoryaComponent', () => {
  let component: ManagecategoryaComponent;
  let fixture: ComponentFixture<ManagecategoryaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecategoryaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecategoryaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

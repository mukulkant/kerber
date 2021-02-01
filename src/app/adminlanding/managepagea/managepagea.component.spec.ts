import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepageaComponent } from './managepagea.component';

describe('ManagepageaComponent', () => {
  let component: ManagepageaComponent;
  let fixture: ComponentFixture<ManagepageaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagepageaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagepageaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

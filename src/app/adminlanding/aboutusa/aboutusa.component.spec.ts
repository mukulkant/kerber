import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusaComponent } from './aboutusa.component';

describe('AboutusaComponent', () => {
  let component: AboutusaComponent;
  let fixture: ComponentFixture<AboutusaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

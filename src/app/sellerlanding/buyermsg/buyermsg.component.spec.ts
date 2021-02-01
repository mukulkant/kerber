import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyermsgComponent } from './buyermsg.component';

describe('BuyermsgComponent', () => {
  let component: BuyermsgComponent;
  let fixture: ComponentFixture<BuyermsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyermsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyermsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

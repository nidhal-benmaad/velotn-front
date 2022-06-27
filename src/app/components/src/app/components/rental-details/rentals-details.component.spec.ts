import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsDetailsComponent } from './rentals-details.component';

describe('RentalDetailsComponent', () => {
  let component: RentalsDetailsComponent;
  let fixture: ComponentFixture<RentalsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

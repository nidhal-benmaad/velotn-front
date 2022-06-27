import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingIndexComponent } from './booking-index.component';

describe('BookingIndexComponent', () => {
  let component: BookingIndexComponent;
  let fixture: ComponentFixture<BookingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

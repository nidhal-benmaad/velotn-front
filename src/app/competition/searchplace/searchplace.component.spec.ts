import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchplaceComponent } from './searchplace.component';

describe('SearchplaceComponent', () => {
  let component: SearchplaceComponent;
  let fixture: ComponentFixture<SearchplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

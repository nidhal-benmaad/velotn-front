import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowonecategorieComponent } from './showonecategorie.component';

describe('ShowonecategorieComponent', () => {
  let component: ShowonecategorieComponent;
  let fixture: ComponentFixture<ShowonecategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowonecategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowonecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

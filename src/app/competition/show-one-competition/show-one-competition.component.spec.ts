import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneCompetitionComponent } from './show-one-competition.component';

describe('ShowOneCompetitionComponent', () => {
  let component: ShowOneCompetitionComponent;
  let fixture: ComponentFixture<ShowOneCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOneCompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

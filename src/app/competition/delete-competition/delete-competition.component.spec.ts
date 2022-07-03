import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCompetitionComponent } from './delete-competition.component';

describe('DeleteCompetitionComponent', () => {
  let component: DeleteCompetitionComponent;
  let fixture: ComponentFixture<DeleteCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompetitionComponent } from './addcompetition.component';

describe('AddcompetitionComponent', () => {
  let component: AddcompetitionComponent;
  let fixture: ComponentFixture<AddcompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

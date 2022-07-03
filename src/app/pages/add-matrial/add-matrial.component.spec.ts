import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatrialComponent } from './add-matrial.component';

describe('AddMatrialComponent', () => {
  let component: AddMatrialComponent;
  let fixture: ComponentFixture<AddMatrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMatrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMatrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

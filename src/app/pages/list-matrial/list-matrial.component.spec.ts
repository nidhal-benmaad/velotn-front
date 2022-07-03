import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatrialComponent } from './list-matrial.component';

describe('ListMatrialComponent', () => {
  let component: ListMatrialComponent;
  let fixture: ComponentFixture<ListMatrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMatrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMatrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

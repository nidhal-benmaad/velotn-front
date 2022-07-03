import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecategorieComponent } from './deletecategorie.component';

describe('DeletecategorieComponent', () => {
  let component: DeletecategorieComponent;
  let fixture: ComponentFixture<DeletecategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

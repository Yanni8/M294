import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserOrGroupPopupComponent } from './add-user-or-group-popup.component';

describe('AddUserOrGroupPopupComponent', () => {
  let component: AddUserOrGroupPopupComponent;
  let fixture: ComponentFixture<AddUserOrGroupPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserOrGroupPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserOrGroupPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

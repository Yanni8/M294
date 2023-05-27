import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLogoutComponent } from './login-logout.component';

describe('LoginLogoutComponent', () => {
  let component: LoginLogoutComponent;
  let fixture: ComponentFixture<LoginLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

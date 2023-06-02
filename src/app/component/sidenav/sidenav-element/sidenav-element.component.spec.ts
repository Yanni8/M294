import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SidenavElementComponent } from './sidenav-element.component';

fdescribe('SidenavElementComponent', () => {
  let component: SidenavElementComponent;
  let fixture: ComponentFixture<SidenavElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavElementComponent],
      imports: [
        MatIconModule,
        RouterTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SidenavElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

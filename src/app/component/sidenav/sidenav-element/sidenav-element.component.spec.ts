import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavElementComponent } from './sidenav-element.component';

describe('SidenavElementComponent', () => {
  let component: SidenavElementComponent;
  let fixture: ComponentFixture<SidenavElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavElementComponent ]
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

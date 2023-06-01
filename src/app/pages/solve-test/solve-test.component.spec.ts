import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveTestComponent } from './solve-test.component';

describe('SolveTestComponent', () => {
  let component: SolveTestComponent;
  let fixture: ComponentFixture<SolveTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolveTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

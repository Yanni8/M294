import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionDetailComponent } from './solution-detail.component';

describe('SolutionDetailComponent', () => {
  let component: SolutionDetailComponent;
  let fixture: ComponentFixture<SolutionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

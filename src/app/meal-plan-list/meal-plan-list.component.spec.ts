import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanListComponent } from './meal-plan-list.component';

describe('MealPlanListComponent', () => {
  let component: MealPlanListComponent;
  let fixture: ComponentFixture<MealPlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealPlanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

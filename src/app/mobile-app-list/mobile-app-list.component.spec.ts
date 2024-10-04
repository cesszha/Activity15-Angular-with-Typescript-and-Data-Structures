import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppListComponent } from './mobile-app-list.component';

describe('MobileAppListComponent', () => {
  let component: MobileAppListComponent;
  let fixture: ComponentFixture<MobileAppListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAppListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

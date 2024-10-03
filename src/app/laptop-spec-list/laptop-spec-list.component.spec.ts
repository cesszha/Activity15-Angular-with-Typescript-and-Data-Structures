import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopSpecListComponent } from './laptop-spec-list.component';

describe('LaptopSpecListComponent', () => {
  let component: LaptopSpecListComponent;
  let fixture: ComponentFixture<LaptopSpecListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopSpecListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopSpecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

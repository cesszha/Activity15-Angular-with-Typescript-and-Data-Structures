import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerListComponent } from './flower-list.component';

describe('FlowerListComponent', () => {
  let component: FlowerListComponent;
  let fixture: ComponentFixture<FlowerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

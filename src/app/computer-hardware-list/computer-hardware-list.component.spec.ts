import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerHardwareListComponent } from './computer-hardware-list.component';

describe('ComputerHardwareListComponent', () => {
  let component: ComputerHardwareListComponent;
  let fixture: ComponentFixture<ComputerHardwareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerHardwareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerHardwareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

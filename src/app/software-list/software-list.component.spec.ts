import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareListComponent } from './software-list.component';

describe('SoftwareListComponent', () => {
  let component: SoftwareListComponent;
  let fixture: ComponentFixture<SoftwareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationListComponent } from './destination-list.component';

describe('DestinationListComponent', () => {
  let component: DestinationListComponent;
  let fixture: ComponentFixture<DestinationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

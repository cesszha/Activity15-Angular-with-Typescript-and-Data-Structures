import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneContactListComponent } from './phone-contact-list.component';

describe('PhoneContactListComponent', () => {
  let component: PhoneContactListComponent;
  let fixture: ComponentFixture<PhoneContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneContactListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowListComponent } from './tv-show-list.component';

describe('TvShowListComponent', () => {
  let component: TvShowListComponent;
  let fixture: ComponentFixture<TvShowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvShowListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

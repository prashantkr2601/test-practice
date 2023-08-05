import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringSectionCarouselComponent } from './hiring-section-carousel.component';

describe('HiringSectionCarouselComponent', () => {
  let component: HiringSectionCarouselComponent;
  let fixture: ComponentFixture<HiringSectionCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiringSectionCarouselComponent]
    });
    fixture = TestBed.createComponent(HiringSectionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

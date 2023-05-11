import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TouristPackageDetailsPage } from './tourist-package-details.page';

describe('TouristPackageDetailsPage', () => {
  let component: TouristPackageDetailsPage;
  let fixture: ComponentFixture<TouristPackageDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TouristPackageDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

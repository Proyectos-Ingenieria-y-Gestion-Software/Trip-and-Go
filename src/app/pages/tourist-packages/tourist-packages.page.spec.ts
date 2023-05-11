import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TouristPackagesPage } from './tourist-packages.page';

describe('TouristPackagesPage', () => {
  let component: TouristPackagesPage;
  let fixture: ComponentFixture<TouristPackagesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TouristPackagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

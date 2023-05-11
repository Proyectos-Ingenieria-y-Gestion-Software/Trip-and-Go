import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuseumDetailsPage } from './museum-details.page';

describe('MuseumDetailsPage', () => {
  let component: MuseumDetailsPage;
  let fixture: ComponentFixture<MuseumDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MuseumDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

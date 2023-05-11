import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FQAPage } from './fqa.page';

describe('FQAPage', () => {
  let component: FQAPage;
  let fixture: ComponentFixture<FQAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FQAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

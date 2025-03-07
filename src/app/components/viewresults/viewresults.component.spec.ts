import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewresultsComponent } from './viewresults.component';

describe('ViewresultsComponent', () => {
  let component: ViewresultsComponent;
  let fixture: ComponentFixture<ViewresultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewresultsComponent]
    });
    fixture = TestBed.createComponent(ViewresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

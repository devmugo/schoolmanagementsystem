import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewworkersComponent } from './viewworkers.component';

describe('ViewworkersComponent', () => {
  let component: ViewworkersComponent;
  let fixture: ComponentFixture<ViewworkersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewworkersComponent]
    });
    fixture = TestBed.createComponent(ViewworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

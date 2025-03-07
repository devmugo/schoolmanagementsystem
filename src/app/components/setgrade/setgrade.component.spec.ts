import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetgradeComponent } from './setgrade.component';

describe('SetgradeComponent', () => {
  let component: SetgradeComponent;
  let fixture: ComponentFixture<SetgradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetgradeComponent]
    });
    fixture = TestBed.createComponent(SetgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

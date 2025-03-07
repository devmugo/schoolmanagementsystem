import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkersComponent } from './add-workers.component';

describe('AddWorkersComponent', () => {
  let component: AddWorkersComponent;
  let fixture: ComponentFixture<AddWorkersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorkersComponent]
    });
    fixture = TestBed.createComponent(AddWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

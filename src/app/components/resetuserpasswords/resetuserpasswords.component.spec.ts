import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetuserpasswordsComponent } from './resetuserpasswords.component';

describe('ResetuserpasswordsComponent', () => {
  let component: ResetuserpasswordsComponent;
  let fixture: ComponentFixture<ResetuserpasswordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetuserpasswordsComponent]
    });
    fixture = TestBed.createComponent(ResetuserpasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpResComponent } from './emp-res.component';

describe('EmpResComponent', () => {
  let component: EmpResComponent;
  let fixture: ComponentFixture<EmpResComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpResComponent]
    });
    fixture = TestBed.createComponent(EmpResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

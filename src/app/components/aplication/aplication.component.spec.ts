import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationComponent } from './aplication.component';

describe('AplicationComponent', () => {
  let component: AplicationComponent;
  let fixture: ComponentFixture<AplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AplicationComponent]
    });
    fixture = TestBed.createComponent(AplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

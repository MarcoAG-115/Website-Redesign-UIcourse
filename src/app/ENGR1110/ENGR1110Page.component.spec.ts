import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENGR1110Component } from './ENGR1110.component';

describe('ENGR1110Component', () => {
  let component: ENGR1110Component;
  let fixture: ComponentFixture<ENGR1110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENGR1110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ENGR1110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
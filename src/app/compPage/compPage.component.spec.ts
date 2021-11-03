import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPageComponent } from './compPage.component';

describe('CompPageComponent', () => {
  let component: CompPageComponent;
  let fixture: ComponentFixture<CompPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

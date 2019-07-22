import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModelchangeComponent } from './form-modelchange.component';

describe('FormModelchangeComponent', () => {
  let component: FormModelchangeComponent;
  let fixture: ComponentFixture<FormModelchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModelchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModelchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

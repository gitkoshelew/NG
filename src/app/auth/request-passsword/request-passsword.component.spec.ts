import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPassswordComponent } from './request-passsword.component';

describe('RequestPassswordComponent', () => {
  let component: RequestPassswordComponent;
  let fixture: ComponentFixture<RequestPassswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPassswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPassswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyle3Component } from './header-style3.component';

describe('HeaderStyle3Component', () => {
  let component: HeaderStyle3Component;
  let fixture: ComponentFixture<HeaderStyle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderStyle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStyle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

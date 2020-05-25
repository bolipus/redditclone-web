import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitLinkComponent } from './submit-link.component';

describe('SubmitLinkComponent', () => {
  let component: SubmitLinkComponent;
  let fixture: ComponentFixture<SubmitLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

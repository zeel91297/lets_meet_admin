import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedEventsComponent } from './unapproved-events.component';

describe('UnapprovedEventsComponent', () => {
  let component: UnapprovedEventsComponent;
  let fixture: ComponentFixture<UnapprovedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapprovedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

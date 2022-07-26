import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberTicketsComponent } from './subscriber-tickets.component';

describe('SubscriberTicketsComponent', () => {
  let component: SubscriberTicketsComponent;
  let fixture: ComponentFixture<SubscriberTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

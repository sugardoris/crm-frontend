import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTypeInputComponent } from './subscription-type-input.component';

describe('SubscriptionTypeInputComponent', () => {
  let component: SubscriptionTypeInputComponent;
  let fixture: ComponentFixture<SubscriptionTypeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionTypeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionTypeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

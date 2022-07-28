import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionInputComponent } from './subscription-input.component';

describe('SubscriptionInputComponent', () => {
  let component: SubscriptionInputComponent;
  let fixture: ComponentFixture<SubscriptionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

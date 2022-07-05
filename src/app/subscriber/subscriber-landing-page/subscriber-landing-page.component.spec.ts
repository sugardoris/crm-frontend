import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberLandingPageComponent } from './subscriber-landing-page.component';

describe('SubscriberLandingPageComponent', () => {
  let component: SubscriberLandingPageComponent;
  let fixture: ComponentFixture<SubscriberLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {Component, OnInit} from '@angular/core';
import {Subscriber} from "../../../../domain/subscriber";
import {ActivatedRoute} from "@angular/router";
import {SubscriberService} from "../../../../service/subscriber.service";

import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
registerLocaleData(localeHr, 'hr');

@Component({
  selector: 'app-subscriber-info',
  templateUrl: './subscriber-info.component.html',
  styleUrls: ['./subscriber-info.component.css']
})
export class SubscriberInfoComponent implements OnInit {

  subscriber?: Subscriber;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private subscriberService: SubscriberService,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getSubscriber();
  }

  getSubscriber() {
    const subscriberId = this.route.snapshot.paramMap.get('id');

    if (subscriberId !== null) {
      this.subscriberService.getSubscriber(subscriberId).subscribe(
        (data) => {
          this.subscriber = data;
        }
      ).add(() => this.loading = false)
    } else {
      console.error('Subscriber id cannot be null.')
    }
  }

}

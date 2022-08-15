import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../../../../domain/subscriber';
import { ActivatedRoute } from '@angular/router';
import { SubscriberService } from '../../../../service/subscriber.service';

import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
import { ActionModalComponent } from '../../../../common/action-modal/action-modal.component';
import { MatDialog } from '@angular/material/dialog';

registerLocaleData(localeHr, 'hr');

@Component({
  selector: 'app-subscriber-info',
  templateUrl: './subscriber-info.component.html',
  styleUrls: ['./subscriber-info.component.css'],
})
export class SubscriberInfoComponent implements OnInit {
  subscriber?: Subscriber;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private subscriberService: SubscriberService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.getSubscriber();
  }

  getSubscriber() {
    const subscriberId = this.route.snapshot.paramMap.get('id');

    if (subscriberId !== null) {
      this.subscriberService
        .getSubscriber(subscriberId)
        .subscribe((data) => {
          this.subscriber = data;
        })
        .add(() => (this.loading = false));
    } else {
      console.error('Subscriber id cannot be null.');
    }
  }

  openDeactivateDialog(id: number, entity = 'subscriber') {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      data: {entity: entity, action: 'Deactivate'},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Deactivate') {
        this.deactivateSubscriber(id);
      }
    });
  }

  deactivateSubscriber(id: number) {
    this.subscriberService.deactivateSubscriber(id).subscribe((data) => {
      this.getSubscriber();
    });
  }
}

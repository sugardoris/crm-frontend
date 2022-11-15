import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubscriptionType } from '../../../domain/subscriptionType';
import { SubscriptionTypeInputComponent } from '../subscription-type-input/subscription-type-input.component';
import { SubscriptionTypeService } from '../../../service/subscription-type.service';
import { UserService } from '../../../service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ActionModalComponent } from '../../../common/action-modal/action-modal.component';
import { SubscriptionTypeDetailsComponent } from '../subscription-type-details/subscription-type-details.component';

@Component({
  selector: 'app-subscription-type-table',
  templateUrl: './subscription-type-table.component.html',
  styleUrls: ['./subscription-type-table.component.css'],
})
export class SubscriptionTypeTableComponent implements OnInit {
  tableColumns: string[] = ['name', 'period', 'discount', 'validFrom', 'validTo', 'active'];
  @Input() dataSource: SubscriptionType[] = [];
  isUserAdmin: boolean = false;
  @Output() subscriptionTypeEvent = new EventEmitter();

  constructor(
    private subscriptionTypeService: SubscriptionTypeService,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.checkIsUserAdmin();
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }

  openEditDialog(subscriptionType: SubscriptionType) {
    const dialogRef = this.dialog.open(SubscriptionTypeInputComponent, {
      data: { subscriptionType: subscriptionType, mode: 'Edit' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Edit') {
        this.subscriptionTypeEvent.emit();
      }
    });
  }

  openDeactivateDialog(id: number, entity = 'subscription type') {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      data: {entity: entity, action: 'Deactivate'},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Deactivate') {
        this.deactivateSubscriptionType(id);
      }
    });
  }

  deactivateSubscriptionType(id: number) {
    this.subscriptionTypeService
      .deactivateSubscriptionType(id)
      .subscribe((data) => {
        this.subscriptionTypeEvent.emit();
      });
  }

  openDetailsDialog(subscriptionType: SubscriptionType) {
    const dialogRef = this.dialog.open(SubscriptionTypeDetailsComponent, {
      data: subscriptionType,
    });
  }
}

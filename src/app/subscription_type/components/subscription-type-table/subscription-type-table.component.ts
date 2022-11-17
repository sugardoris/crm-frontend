import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubscriptionType } from '../../../domain/subscriptionType';
import { SubscriptionTypeService } from '../../../service/subscription-type.service';
import { UserService } from '../../../service/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-subscription-type-table',
  templateUrl: './subscription-type-table.component.html',
  styleUrls: ['./subscription-type-table.component.css'],
})
export class SubscriptionTypeTableComponent implements OnInit {
  tableColumns: string[] = ['name', 'period', 'discount', 'validFrom', 'validTo', 'active'];
  @Input() dataSource: SubscriptionType[] = [];

  isUserAdmin: boolean = false;

  @Output() editEvent = new EventEmitter();
  @Output() deactivateEvent = new EventEmitter();
  @Output() detailsEvent = new EventEmitter();

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
    this.editEvent.emit(subscriptionType);
  }

  openDeactivateDialog(id: number) {
    this.deactivateEvent.emit(id);
  }

  openDetailsDialog(subscriptionType: SubscriptionType) {
    this.detailsEvent.emit(subscriptionType);
  }
}

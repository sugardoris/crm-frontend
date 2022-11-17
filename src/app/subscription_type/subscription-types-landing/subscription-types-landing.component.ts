import { Component, OnInit } from '@angular/core';
import { SubscriptionTypeInputComponent } from '../components/subscription-type-input/subscription-type-input.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../service/user.service';
import { SubscriptionType } from '../../domain/subscriptionType';
import { SubscriptionTypeService } from '../../service/subscription-type.service';
import {ActionModalComponent} from "../../common/action-modal/action-modal.component";
import {
  SubscriptionTypeDetailsComponent
} from "../components/subscription-type-details/subscription-type-details.component";

@Component({
  selector: 'app-subscription-types-landing',
  templateUrl: './subscription-types-landing.component.html',
  styleUrls: ['./subscription-types-landing.component.css'],
})
export class SubscriptionTypesLandingComponent implements OnInit {
  isUserAdmin: boolean = false;
  subscriptionTypes: SubscriptionType[] = [];
  loading: boolean = false;

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private subscriptionTypeService: SubscriptionTypeService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.checkIsUserAdmin();
    this.getSubscriptionTypes();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(SubscriptionTypeInputComponent, {
      data: { mode: 'Add' },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getSubscriptionTypes();
    });
  }

  openEditDialog(subscriptionType: SubscriptionType) {
    const dialogRef = this.dialog.open(SubscriptionTypeInputComponent, {
      data: { subscriptionType: subscriptionType, mode: 'Edit' },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getSubscriptionTypes();
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

  openDetailsDialog(subscriptionType: SubscriptionType) {
    this.dialog.open(SubscriptionTypeDetailsComponent, {
      data: subscriptionType,
    });
  }

  deactivateSubscriptionType(id: number) {
    this.subscriptionTypeService
      .deactivateSubscriptionType(id)
      .subscribe(() => {
        this.getSubscriptionTypes();
      });
  }

  getSubscriptionTypes() {
    this.subscriptionTypeService
      .getSubscriptionTypes()
      .subscribe((data) => {
        this.subscriptionTypes = data;
      })
      .add(() => (this.loading = false));
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserInputDialogComponent } from '../components/user-input-dialog/user-input-dialog.component';
import { UserService } from '../../service/user.service';
import { User } from '../../domain/user';
import {ActionModalComponent} from "../../common/action-modal/action-modal.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css'],
})
export class UserLandingPageComponent implements OnInit {
  users: User[] = [];
  isUserAdmin: boolean = false;
  loading: boolean = false;

  constructor(public dialog: MatDialog, public userService: UserService) {}

  ngOnInit(): void {
    this.loading = true;
    this.checkIsUserAdmin();
    this.getUsers();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(UserInputDialogComponent, {
      data: { mode: 'Add' },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }

  openEditDialog(user: User) {
    const dialogRef = this.dialog.open(UserInputDialogComponent, {
      data: { user: user, mode: 'Edit' },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }

  openDeactivateDialog(id: number, entity = 'user') {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      data: {entity: entity, action: 'Deactivate'}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Deactivate') {
        this.deactivateUser(id);
      }
    });
  }

  openDetailsDialog(user: User) {
    this.dialog.open(UserDetailsComponent, { data: user });
  }

  deactivateUser(id: number) {
    this.userService.deactivateUser(id).subscribe(() => {
      this.getUsers();
    });
  }

  getUsers() {
    this.userService
      .getUsers()
      .subscribe((data) => {
        this.users = data;
      })
      .add(() => (this.loading = false));
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }
}

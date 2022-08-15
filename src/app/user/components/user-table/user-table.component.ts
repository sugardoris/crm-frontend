import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../domain/user';
import { UserService } from '../../../service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserInputDialogComponent } from '../user-input-dialog/user-input-dialog.component';
import { ActionModalComponent } from '../../../common/action-modal/action-modal.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  isUserAdmin: boolean = false;
  @Output() userEvent = new EventEmitter();

  tableColumns: string[] = ['username', 'fullName', 'role', 'status'];
  @Input() dataSource: User[] = [];

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.checkIsUserAdmin();
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }

  openEditDialog(user: User) {
    const dialogRef = this.dialog.open(UserInputDialogComponent, {
      data: { user: user, mode: 'Edit' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Edit') {
        this.userEvent.emit();
      }
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

  deactivateUser(id: number) {
    this.userService.deactivateUser(id).subscribe((data) => {
      this.userEvent.emit();
    });
  }

  openDetailsDialog(user: User) {
    const dialogRef = this.dialog.open(UserDetailsComponent, { data: user });
  }
}

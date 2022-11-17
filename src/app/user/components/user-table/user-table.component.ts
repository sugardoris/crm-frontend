import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../domain/user';
import { UserService } from '../../../service/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  isUserAdmin: boolean = false;

  tableColumns: string[] = ['username', 'fullName', 'role', 'status'];
  @Input() dataSource: User[] = [];

  @Output() editEvent = new EventEmitter();
  @Output() deactivateEvent = new EventEmitter();
  @Output() detailsEvent = new EventEmitter();

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.checkIsUserAdmin();
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }

  openEditDialog(user: User) {
    this.editEvent.emit(user);
  }

  openDeactivateDialog(id: number) {
    this.deactivateEvent.emit(id);
  }

  openDetailsDialog(user: User) {
    this.detailsEvent.emit(user);
  }
}

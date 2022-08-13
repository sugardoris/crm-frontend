import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../domain/user";
import {UserService} from "../../../service/user.service";
import {MatDialog} from "@angular/material/dialog";
import {UserInputDialogComponent} from "../user-input-dialog/user-input-dialog.component";
import {DeactivateModalComponent} from "../../../common/deactivate-modal/deactivate-modal.component";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  isUserAdmin: boolean = false;
  @Output() deactivateUserEvent = new EventEmitter();

  tableColumns: string[] = ["username", "fullName", "role", "status"];
  @Input() dataSource: User[] = [];

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.checkIsUserAdmin();
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }

  openDialog(id: number, entity = 'user') {
    const dialogRef = this.dialog.open(DeactivateModalComponent,
      {data: entity});

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === "Deactivate") {
        this.deactivateUser(id);
      }
    });
  }

  deactivateUser(id: number) {
    this.userService.deactivateUser(id).subscribe(
      (newUser) => {
        console.log(newUser);
        this.deactivateUserEvent.emit();
      }
    )
  }

}

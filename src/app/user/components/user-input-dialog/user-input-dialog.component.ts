import {Component, Inject, OnInit, Optional, ViewChild} from '@angular/core';
import {Role, User} from "../../../domain/user";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {UserService} from "../../../service/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-user-input-dialog',
  templateUrl: './user-input-dialog.component.html',
  styleUrls: ['./user-input-dialog.component.css']
})
export class UserInputDialogComponent implements OnInit {

  editMode: boolean = false;
  user?: User;
  roleOptions = Object.values(Role);

  @ViewChild('formDirective') private formDirective?: NgForm;

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
    password: new FormControl('', Validators.required),
    fullName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    role: new FormControl('', Validators.required),
  })

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<UserInputDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public newUser: User
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.newUser = {
      username: this.userForm.value.username.trim(),
      password: this.userForm.value.password.trim(),
      name: this.userForm.value.fullName.trim(),
      role: this.userForm.value.role
    }

    this.userService.addUser(this.newUser).subscribe(
      (newUser) => {
        this.sendDataToTable(newUser);
      }
    );
  }

  sendDataToTable(newUser: User) {
    this.dialogRef.close({event: 'Submit', data: newUser});
  }

}

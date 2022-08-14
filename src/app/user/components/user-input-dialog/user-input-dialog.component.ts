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
    @Inject(MAT_DIALOG_DATA) public data: {user: User, mode: string}
  ) { }

  ngOnInit(): void {
    this.checkMode();
  }

  checkMode() {
    if (this.data.mode === 'Edit') {
      this.editMode = true;
      this.getUserData(this.data.user);
    }
  }

  onSubmit() {
    this.user = {
      username: this.userForm.value.username.trim(),
      password: this.userForm.value.password.trim(),
      name: this.userForm.value.fullName.trim(),
      role: this.userForm.value.role
    }

    if (this.editMode) {
      this.user.id = this.data.user.id;
      this.userService.editUser(this.user).subscribe(
        (editedUser) => {
          this.dialogRef.close({event: 'Edit'});
        }
      )

    } else {
      this.userService.addUser(this.user).subscribe(
        (newUser) => {
          this.dialogRef.close({event: 'Submit'});
        }
      );
    }
  }

  getUserData(user: User) {
    if (this.data.user) {
      this.userForm.patchValue({
        username: this.data.user.username,
        password: this.data.user.password,
        fullName: this.data.user.name,
        role: this.data.user.role
      });
    }
  }

}

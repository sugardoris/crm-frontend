import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  @Input() adminCheck: boolean = true;
  @Input() entity: string = '';
  showButton: boolean = true;
  @Output() openAddDialogEvent = new EventEmitter();


  constructor(private userService: UserService,) { }

  ngOnInit(): void {
    if (this.adminCheck) {
      this.checkIsUserAdmin();
    }
  }

  checkIsUserAdmin() {
    if (!this.userService.isRoleAdmin())
      this.showButton = false;
  }

  onClick() {
    this.openAddDialogEvent.emit();
  }

}

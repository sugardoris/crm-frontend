import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-deactivate-modal',
  templateUrl: './deactivate-modal.component.html',
  styleUrls: ['./deactivate-modal.component.css']
})
export class DeactivateModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeactivateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public entity: string
  ) { }

  ngOnInit(): void {
  }

  deactivate() {
    this.dialogRef.close({event: 'Deactivate'});
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deactivate-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.css'],
})
export class ActionModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ActionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { entity: string; action: string }
  ) {}

  ngOnInit(): void {}

  onAction() {
    this.dialogRef.close({ event: this.data.action });
  }
}

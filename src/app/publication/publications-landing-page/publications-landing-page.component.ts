import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PublicationInputComponent} from "../components/publication-input/publication-input.component";

@Component({
  selector: 'app-publications-landing-page',
  templateUrl: './publications-landing-page.component.html',
  styleUrls: ['./publications-landing-page.component.css']
})
export class PublicationsLandingPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(PublicationInputComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

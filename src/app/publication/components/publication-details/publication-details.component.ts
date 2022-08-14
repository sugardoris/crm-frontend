import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Publication} from "../../../domain/publication";

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public publication: Publication
  ) { }

  ngOnInit(): void {
  }

}

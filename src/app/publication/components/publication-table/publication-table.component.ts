import {Component, OnInit} from '@angular/core';
import {PublicationPeriod, Publication} from "../../../domain/publication";

@Component({
  selector: 'app-publication-table',
  templateUrl: './publication-table.component.html',
  styleUrls: ['./publication-table.component.css']
})
export class PublicationTableComponent implements OnInit {

  tableColumns: string[] = ["name", "firstIssue", "issuePeriod", "comesOut", "nextIssue", "price", "active"];
  dataSource = TABLE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

const TABLE_DATA: Publication[] = [

]

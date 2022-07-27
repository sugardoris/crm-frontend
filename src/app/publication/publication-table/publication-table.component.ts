import {Component, OnInit} from '@angular/core';
import {Period, Publication} from "../../domain/publication";

@Component({
  selector: 'app-publication-table',
  templateUrl: './publication-table.component.html',
  styleUrls: ['./publication-table.component.css']
})
export class PublicationTableComponent implements OnInit {

  tableColumns: string[] = ["name", "firstIssue", "issuePeriod", "comesOut", "nextIssue", "active"];
  dataSource = TABLE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

const TABLE_DATA: Publication[] = [
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: Period.DAILY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: Period.WEEKLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: Period.BIWEEKLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: Period.MONTHLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: Period.BIANNUALLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: Period.ANNUALLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: Period.DAILY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: Period.DAILY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: false},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: Period.DAILY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: Period.DAILY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: false},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: Period.DAILY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true},
]

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
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.DAILY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.WEEKLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.BIWEEKLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.MONTHLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.BIANNUALLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.ANNUALLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.DAILY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true,price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.DAILY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: false, price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.DAILY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.DAILY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: false,price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.DAILY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
]

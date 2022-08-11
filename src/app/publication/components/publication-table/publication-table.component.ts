import {Component, OnInit} from '@angular/core';
import {PublicationPeriod, Publication} from "../../../domain/publication";
import {PublicationService} from "../../publication.service";
import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
registerLocaleData(localeHr, 'hr');


@Component({
  selector: 'app-publication-table',
  templateUrl: './publication-table.component.html',
  styleUrls: ['./publication-table.component.css']
})
export class PublicationTableComponent implements OnInit {

  tableColumns: string[] = ["name", "firstIssue", "issuePeriod", "comesOut", "price", "active"];
  publications: Publication[] = [];
  dataSource: Publication[] = [];
  loading: boolean = false;

  constructor(
    private publicationService: PublicationService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getPublications();
  }

  getPublications() {
    this.publicationService.getPublications().subscribe(
      (data) => {
        this.publications = data;
        console.log(this.publications);
        this.dataSource = this.publications;
      }).add(() => this.loading = false);
  }

}

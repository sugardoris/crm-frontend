import {Component, OnInit} from '@angular/core';
import {PublicationPeriod, Publication} from "../../../domain/publication";
import {PublicationService} from "../../../service/publication.service";
import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
import {UserService} from "../../../service/user.service";
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
  isUserAdmin: boolean = false;

  constructor(
    private publicationService: PublicationService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getPublications();
    this.checkIsUserAdmin();
  }

  getPublications() {
    this.publicationService.getPublications().subscribe(
      (data) => {
        this.publications = data;
        this.dataSource = this.publications;
      }).add(() => this.loading = false);
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PublicationInputComponent } from '../components/publication-input/publication-input.component';
import { UserService } from '../../service/user.service';
import { Publication } from '../../domain/publication';
import { PublicationService } from '../../service/publication.service';
import {ActionModalComponent} from "../../common/action-modal/action-modal.component";
import {PublicationDetailsComponent} from "../components/publication-details/publication-details.component";

@Component({
  selector: 'app-publications-landing-page',
  templateUrl: './publications-landing-page.component.html',
  styleUrls: ['./publications-landing-page.component.css'],
})
export class PublicationsLandingPageComponent implements OnInit {
  isUserAdmin: boolean = false;
  publications: Publication[] = [];
  loading: boolean = false;

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private publicationService: PublicationService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.checkIsUserAdmin();
    this.getPublications();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(PublicationInputComponent, {
      data: { mode: 'Add' },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getPublications();
    });
  }

  openEditDialog(publication: Publication) {
    const dialogRef = this.dialog.open(PublicationInputComponent, {
      data: { publication: publication, mode: 'Edit' },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getPublications();
    });
  }

  openDeactivateDialog(id: number, entity = 'publication') {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      data: {entity: entity, action: 'Deactivate'},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Deactivate') {
        this.deactivatePublication(id);
      }
    });
  }

  openDetailsDialog(publication: Publication) {
    this.dialog.open(PublicationDetailsComponent, {
      data: publication,
    });
  }

  deactivatePublication(id: number) {
    this.publicationService.deactivatePublication(id).subscribe(() => {
      this.getPublications();
    });
  }

  getPublications() {
    this.publicationService
      .getPublications()
      .subscribe((data) => {
        this.publications = data;
      })
      .add(() => (this.loading = false));
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }
}

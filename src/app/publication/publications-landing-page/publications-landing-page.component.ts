import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PublicationInputComponent } from '../components/publication-input/publication-input.component';
import { UserService } from '../../service/user.service';
import { Publication } from '../../domain/publication';
import { PublicationService } from '../../service/publication.service';

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

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Submit') {
        this.getPublications();
      }
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

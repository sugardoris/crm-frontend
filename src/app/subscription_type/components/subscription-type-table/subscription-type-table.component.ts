import { Component, OnInit } from '@angular/core';
import {SubscriptionPeriod, SubscriptionType} from "../../../domain/subscriptionType";
import {SubscriptionTypeInputComponent} from "../subscription-type-input/subscription-type-input.component";
import {SubscriptionTypeService} from "../../../service/subscription-type.service";

@Component({
  selector: 'app-subscription-type-table',
  templateUrl: './subscription-type-table.component.html',
  styleUrls: ['./subscription-type-table.component.css']
})
export class SubscriptionTypeTableComponent implements OnInit {

  tableColumns: string[] = ["name", "period", "discount", "active"];
  subscriptionTypes: SubscriptionType[] = [];
  dataSource: SubscriptionType[] = [];
  loading: boolean = false;


  constructor(
    private subscriptionTypeService: SubscriptionTypeService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getSubscriptionTypes();
  }

  getSubscriptionTypes() {
    this.subscriptionTypeService.getSubscriptionTypes().subscribe(
      (data) => {
        this.subscriptionTypes = data;
        this.dataSource = this.subscriptionTypes;
      }).add(() => this.loading = false);
  }
}

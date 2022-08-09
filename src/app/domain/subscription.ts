import {Publication} from "./publication";
import {SubscriptionType} from "./subscriptionType";

export interface Subscription {
  id: number,
  subscriptionType: SubscriptionType,
  publication?: Publication,
  dateStarted: string,
  dateEnded: string,
  price: string,
  createdBy?: string,
  updatedBy?: string,
  createDate?: string,
  lastUpdate?: string,
}

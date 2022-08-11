import {Publication} from "./publication";
import {SubscriptionType} from "./subscriptionType";

export interface Subscription {
  id: number,
  subscriptionTypeId: number,
  subscriberId: number,
  publicationId: number,
  dateStarted: string,
  dateEnded: string,
  price: string,
  createdBy?: string,
  updatedBy?: string,
  createDate?: string,
  lastUpdate?: string,
}

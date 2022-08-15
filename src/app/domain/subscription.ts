import {Publication} from "./publication";
import {SubscriptionType} from "./subscriptionType";

export interface Subscription {
  id?: number,
  subscriptionTypeId: number,
  subscriptionTypeName?: string,
  subscriptionTypeDiscount?: string,
  subscriberId: number,
  publicationId: number,
  publicationName?: number,
  dateStarted: string,
  dateEnded?: string,
  price?: string,
  createdBy?: string,
  updatedBy?: string,
  createDate?: string,
  lastUpdate?: string,
}

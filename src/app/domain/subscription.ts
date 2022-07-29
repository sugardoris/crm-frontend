import {Publication} from "./publication";
import {SubscriptionType} from "./subscriptionType";

export interface Subscription {
  publication?: Publication,
  publicationName: string,
  dateStarted: string,
  dateEnded: string,
  subscriptionType: SubscriptionType
}

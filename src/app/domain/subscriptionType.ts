export interface SubscriptionType {
  id?: number;
  name: string;
  discount: string;
  subscriptionPeriod: SubscriptionPeriod;
  active?: boolean;
  createdBy?: string;
  updatedBy?: string;
  createDate?: string;
  lastUpdate?: string;
}

export enum SubscriptionPeriod {
  MONTHLY = 'MONTHLY',
  BIANNUALLY = 'BIANNUALY',
  ANNUALLY = 'ANNUALY',
}

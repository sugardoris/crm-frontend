export interface SubscriptionType {
  id: number,
  name: string,
  discount: string,
  subscriptionPeriod: SubscriptionPeriod,
  active: boolean,
  createdBy?: string,
  updatedBy?: string,
  createDate?: string,
  lastUpdate?: string,
}

export enum SubscriptionPeriod {
  MONTHLY = "Monthly",
  BIANNUALLY = "Every six months",
  ANNUALLY = "Yearly"
}

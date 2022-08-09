export interface SubscriptionType {
  id: number,
  name: string,
  discount: string,
  expirationDate?: string,
  subscriptionPeriod: SubscriptionPeriod,
  active: boolean,
  createdBy?: string,
  updatedBy?: string,
  createDate?: string,
  lastUpdate?: string,
}

export enum SubscriptionPeriod {
  MONTHLY = "Monthly",
  TRIMONTHLY = "Every three months",
  BIANNUALLY = "Every six months",
  ANNUALLY = "Yearly"
}

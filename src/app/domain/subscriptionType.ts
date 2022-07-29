export interface SubscriptionType {
  name: string,
  discount: string,
  expirationDate?: string,
  subscriptionPeriod: SubscriptionPeriod,
  active: boolean
}

export enum SubscriptionPeriod {
  MONTHLY = "Monthly",
  TRIMONTHLY = "Every three months",
  BIANNUALLY = "Every six months",
  ANNUALLY = "Yearly"
}

export interface Publication {
  name: string,
  firstIssue: string,
  issuePeriod: PublicationPeriod,
  comesOut: string,
  nextIssue: string,
  active: boolean,
  price: string
}

export enum PublicationPeriod {
  DAILY = "Daily",
  WEEKLY = "Weekly",
  BIWEEKLY = "Every two weeks",
  MONTHLY = "Monthly",
  BIANNUALLY = "Every six months",
  ANNUALLY = "Yearly"
}

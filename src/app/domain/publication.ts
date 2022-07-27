export interface Publication {
  name: string,
  firstIssue: string,
  issuePeriod: Period,
  comesOut: string,
  nextIssue: string,
  active: boolean
}

export enum Period {
  DAILY = "Daily",
  WEEKLY = "Weekly",
  BIWEEKLY = "Biweekly",
  MONTHLY = "Monthly",
  BIANNUALLY = "Biannually",
  ANNUALLY = "Annually"
}

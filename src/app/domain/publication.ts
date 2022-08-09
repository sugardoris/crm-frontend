export interface Publication {
  id: number,
  name: string,
  publishingInfo: PublishingInfo,
  createdBy?: string,
  updatedBy?: string,
  createDate?: string,
  lastUpdate?: string
}

export interface PublishingInfo {
  firstIssueDate: string,
  issuePeriod: PublicationPeriod,
  comesOut: string,
  nextIssue: string,
  price: string,
  active: boolean
}

export enum PublicationPeriod {
  DAILY = "Daily",
  WEEKLY = "Weekly",
  BIWEEKLY = "Every two weeks",
  MONTHLY = "Monthly",
  BIANNUALLY = "Every six months",
  ANNUALLY = "Yearly"
}

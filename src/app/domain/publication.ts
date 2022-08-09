export interface Publication {
  id: number,
  name: string,
  publishingInfo: PublishingInfo,
  active: boolean,
  createdBy?: string,
  updatedBy?: string,
  createDate?: string,
  lastUpdate?: string
}

export interface PublishingInfo {
  firstIssueDate: string,
  issuePeriod: PublicationPeriod,
  comesOut: string,
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

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
  id: number,
  firstIssueDate: string,
  issuePeriod: PublicationPeriod,
  comesOut: string,
  price: string
}

export enum PublicationPeriod {
  DAILY = "Daily",
  WEEKLY = "Weekly",
  MONTHLY = "Monthly",
}

export interface Publication {
  id?: number;
  name: string;
  firstIssueDate: string;
  issuePeriod: PublicationPeriod;
  comesOut: string;
  price: string;
  active?: boolean;
  createdBy?: string;
  updatedBy?: string;
  createDate?: string;
  lastUpdate?: string;
}

export enum PublicationPeriod {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
}

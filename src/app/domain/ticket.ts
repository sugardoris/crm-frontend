export interface Ticket {
  id: number,
  subscriberId: number,
  type: TicketType,
  description: string,
  resolved: boolean,
  createdBy?: string,
  updatedBy?: string,
  createDate?: string,
  lastUpdate?: string
}

export enum TicketType {
  COMPLAINT = "Complaint",
  INFO = "Subscription info",
  PAYMENT = "Payment info",
  NEW = "New subscription",
  CANCELLATION = "Cancellation of subscription"
}

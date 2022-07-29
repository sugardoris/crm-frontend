export interface Ticket {
  type: string,
  dateCreated: string,
  lastUpdate: string,
  updatedBy: string,
  resolved: boolean
}

export enum TicketType {
  COMPLAINT = "Complaint",
  INFO = "Info",
  PAYMENT = "Payment",
  NEW = "New subscription",
  CANCELLATION = "Cancellation"
}

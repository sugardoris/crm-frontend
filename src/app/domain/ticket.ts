export interface Ticket {
  id?: number;
  subscriberId: number;
  type: TicketType;
  description: string;
  resolved?: boolean;
  createdBy?: string;
  updatedBy?: string;
  createDate?: string;
  lastUpdate?: string;
}

export enum TicketType {
  COMPLAINT = 'COMPLAINT',
  INFO = 'INFO',
  PAYMENT = 'PAYMENT',
  NEW = 'NEW',
  CANCELLATION = 'CANCELLATION',
}

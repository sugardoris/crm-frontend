import { City } from './city';

export interface Subscriber {
  id?: number;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  oib: string;
  email: string;
  phone: string;
  billingAddress: string;
  legalEntity?: boolean;
  city: City;
  active?: boolean;
  createdBy?: string;
  updatedBy?: string;
  createDate?: string;
  lastUpdate?: string;
}

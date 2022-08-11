import {City} from "./city";

export interface Subscriber {
  id: number,
  contactinfo: ContactInfo,
  active?: boolean,
  createdBy?: string,
  updatedBy?: string,
  createDate?: string,
  lastUpdate?: string,
}

export interface ContactInfo {
  id: number,
  firstName?: string,
  lastName?: string,
  companyName?: string,
  oib: string,
  email: string,
  phone1: string,
  phone2?: string,
  billingAddress: string,
  city: City,
  legalEntity?: boolean,
}

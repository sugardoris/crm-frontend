export interface Subscriber {
  name: string,
  lastName?: string,
  companyName?: string,
  oib: string,
  email: string,
  phone: string,
  phone2?: string,
  address: string,
  city: string,
  isLegalEntity?: boolean,
  isActive?: boolean,
  createDate?: string,
  lastUpdate?: string,
  updatedBy?: string
}

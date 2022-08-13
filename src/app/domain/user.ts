export interface User {
  id?: number,
  username: string,
  password?: string,
  name: string,
  role: Role,
  active?: boolean,
  createdBy?: string,
  updatedBy?: string,
  createDate?: string,
  lastUpdate?: string,
}

export enum Role {
  EMPLOYEE = "EMPLOYEE",
  ADMIN = "ADMIN"
}

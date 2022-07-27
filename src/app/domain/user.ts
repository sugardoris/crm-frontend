export interface User {
  username: string,
  password?: string,
  fullName: string,
  role: Role,
  active: boolean
}

export enum Role {
  USER = "User",
  ADMIN = "Admin"
}

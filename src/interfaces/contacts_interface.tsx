import { IUser } from "./user_interfaces";

export interface IContact {
  id: string;
  full_name: string;
  email: string;
  telephone: number;
  user: IUser;
  created_at: Date;
  updated_at: Date;
}
export interface IContactRegister {
  full_name: string;
  email: string;
  telephone: number;
}

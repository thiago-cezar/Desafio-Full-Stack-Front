export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name_and_surname: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUserRegister extends IUserLogin {
  name_and_surname: string;
}

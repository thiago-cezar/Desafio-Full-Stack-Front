import { AxiosInstance } from "axios";
import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";
import { IContact } from "./contacts_interface";
import { IUser, IUserLogin, IUserRegister } from "./user_interfaces";

export interface IContextInterface {
  token: string | null;
  navigate: NavigateFunction;
  api: AxiosInstance;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  signIn: (data: IUserLogin) => Promise<void>;
  signRegister: (data: IUserRegister) => Promise<void>;
  contacts: IContact[];
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  filterCont: IContact[];
  setFilterCont: React.Dispatch<React.SetStateAction<IContact[]>>;
  contactDelete: (id: string) => Promise<void>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModal: () => void;
}

export interface IChildrenProps {
  children: ReactNode;
}

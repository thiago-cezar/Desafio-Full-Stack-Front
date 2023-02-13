import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IContact, IContactUpdate } from "../interfaces/contacts_interface";
import {
  IChildrenProps,
  IContextInterface,
} from "../interfaces/context_interfaces";
import {
  IUser,
  IUserLogin,
  IUserRegister,
} from "../interfaces/user_interfaces";
import api from "../services/api";

export const AuthContext = createContext({} as IContextInterface);

export const AuthProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>({} as IUser);
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [filterCont, setFilterCont] = useState<IContact[]>([]);
  const [modal, setModal] = useState(false);

  const token = localStorage.getItem("@token");

  function isModal() {
    setModal(!modal);
  }

  const signIn = async (data: IUserLogin) => {
    await api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("@token", res.data.token);
        toast.success("Welcome!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        toast.error("Invalid email or password", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
      });
  };

  const getContacts = async () => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    await api
      .get("/user/contacts")
      .then((res) => {
        setContacts(res.data.contacts);
        setFilterCont(res.data.contacts);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const signRegister = async (data: IUserRegister) => {
    await api
      .post("/users", data)
      .then((res) => {
        toast.success("Conta criada com sucesso!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        navigate("/", { replace: true });
      })
      .catch((err) =>
        toast.error("Ops! Algo deu errado", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        })
      );
  };
  const contactDelete = async (id: string) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    await api
      .delete(`/user/contacts/${id}`)
      .then((res) => {
        toast.success("Contact deleted successfully!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        setFilterCont((old) => old.filter((elem) => elem.id !== id));
      })
      .catch((err) =>
        toast.error("Erro", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        })
      );
  };
  const contactUpdate = async (data: IContactUpdate, id:string) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    await api
      .patch(`/user/contacts/${id}`)
      .then((res) => {
        toast.success("Contact deleted successfully!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        setFilterCont((old) => old.filter((elem) => elem.id !== id));
      })
      .catch((err) =>
        toast.error("Erro", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        })
      );
  };
  useEffect(() => {
    async function dateContact() {
      if (token) {
        getContacts();
      } else {
        localStorage.clear();
      }
    }
    dateContact();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        navigate,
        api,
        signIn,
        setUser,
        token,
        signRegister,
        contacts,
        setContacts,
        filterCont,
        setFilterCont,
        contactDelete,
        modal,
        setModal,
        isModal
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

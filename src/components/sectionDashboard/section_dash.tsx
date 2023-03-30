import { useContext } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { AuthContext } from "../../providers/context";
import {
  ButtonAddCont,
  ButtonExit,
  DashboardStyle,
} from "../../style/dashboard/style";
import { Ul } from "./ul_contacts";

export function Dashboard() {
  const { navigate, setFilterCont, contacts, isModal } =
    useContext(AuthContext);
  return (
    <DashboardStyle>
      <nav>
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => {
            setFilterCont(
              contacts.filter((obj) =>
                obj.full_name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              )
            );
          }}
        />
        <ButtonAddCont onClick={() => isModal("register")}>
          <AiOutlineUserAdd />
        </ButtonAddCont>
        <ButtonExit
          onClick={() => {
            localStorage.clear(), navigate("/");
          }}
        >
          <IoExitOutline />
        </ButtonExit>
      </nav>
      <Ul />
    </DashboardStyle>
  );
}

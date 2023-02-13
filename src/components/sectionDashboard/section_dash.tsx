import { useContext } from "react";
import { AuthContext } from "../../providers/context";
import { DashboardStyle } from "../../style/dashboard/style";
import { Ul } from "./ul_contacts";
export function Dashboard() {
  const { navigate, setFilterCont, contacts, filterCont } =
    useContext(AuthContext);
  return (
    <DashboardStyle>
      <input
        type="button"
        value="x"
        onClick={() => {
          localStorage.clear(), navigate("/");
        }}
      />
      <nav>
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => {
            setFilterCont(
              contacts.filter((obj) => obj.full_name.includes(e.target.value))
            );
          }}
        />
      </nav>
      <Ul />
    </DashboardStyle>
  );
}

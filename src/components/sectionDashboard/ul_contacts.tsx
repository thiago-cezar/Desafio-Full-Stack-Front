import { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { AuthContext } from "../../providers/context";
import { H2, UlStyle } from "../../style/dashboard/ul/style";

export function Ul() {
  const { filterCont, contactDelete, isModal, setContactEdit } =
    useContext(AuthContext);
  return (
    <>
      {filterCont?.length > 0 ? (
        <UlStyle>
          {filterCont
            .sort((a, b) => a.full_name.localeCompare(b.full_name))
            .map((cont) => (
              <li key={cont.id}>
                {cont.full_name}
                <details>
                  <summary>See contact</summary>
                  <div>
                    <button
                      className="edit"
                      onClick={() => {
                        isModal(cont.id), setContactEdit(cont);
                      }}
                    >
                      <AiFillEdit />
                    </button>
                    <button className="trash">
                      <BiTrash onClick={() => contactDelete(cont.id)} />
                    </button>
                  </div>
                  <p>Number: {cont.telephone}</p>
                  <p>E-mail: {cont.email}</p>
                </details>
              </li>
            ))}
        </UlStyle>
      ) : (
        <H2>You don't have any contact!</H2>
      )}
    </>
  );
}

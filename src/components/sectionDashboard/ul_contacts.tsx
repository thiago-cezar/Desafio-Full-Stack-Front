import { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import Modal from "react-modal";
import { AuthContext } from "../../providers/context";
import { customStyles, UlStyle } from "../../style/dashboard/ul/style";
Modal.setAppElement("#root");

export function Ul() {
  const { filterCont, contactDelete, modal, setModal, isModal } =
    useContext(AuthContext);
  return (
    <>
      {filterCont?.length > 0 ? (
        <UlStyle>
          {filterCont.map((cont) => (
            <li key={cont.id}>
              {cont.full_name}
              <details>
                <summary>See contact.</summary>
                <div>
                  <button>
                    <AiFillEdit onClick={() => isModal()} />
                  </button>
                  <button>
                    <BiTrash onClick={() => contactDelete(cont.id)} />
                  </button>
                </div>
                <p>Number: {cont.telephone}</p>
                <p>E-mail: {cont.email}</p>
                <Modal
                  isOpen={modal}
                  onRequestClose={isModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <form>
                    <input
                      id="email"
                      placeholder="Email"
                      required
                      type={"email"}
                    />

                    <input
                      type="text"
                      id="full_name"
                      required
                      placeholder="Full name"
                    />
                    <button type="submit">Sign in</button>
                  </form>
                </Modal>
              </details>
            </li>
          ))}
        </UlStyle>
      ) : (
        <h2>You don't have any contact!</h2>
      )}
    </>
  );
}

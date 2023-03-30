import { useContext } from "react";
import Modal from "react-modal";
import { AuthContext } from "../../providers/context";
import { modalStyles } from "../../style/modal/style";
import FormRegisterContact from "../formRegisterContact/form_register_contact";

function ModalDisplay() {
  const { modal, isModal } = useContext(AuthContext);
  return (
    <Modal
      isOpen={modal.isModal}
      onRequestClose={() => isModal("")}
      style={modalStyles}
      
    >
      <FormRegisterContact />
    </Modal>
  );
}

export default ModalDisplay;

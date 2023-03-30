import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IContactRegister } from "../../interfaces/contacts_interface";
import { AuthContext } from "../../providers/context";
import { FormRegisterContactStyle } from "../../style/modal/style";
import { IoExitOutline } from "react-icons/io5";


function FormRegisterContact() {
  const { contactRegister, modal, contactUpdate, contactEdit, isModal } =
    useContext(AuthContext);

  const { register, handleSubmit } = useForm<IContactRegister>();

  return (
    <FormRegisterContactStyle
      onSubmit={
        modal.type === "register"
          ? handleSubmit(contactRegister)
          : handleSubmit(contactUpdate)
      }
    >
      <h1>
        {modal.type === "register" ? "Register contact!" : "Update contact!"}
      </h1>

      <input
        id="full_name"
        placeholder="Full name"
        defaultValue={modal.type !== "register" ? contactEdit.full_name : ""}
        required
        type={"text"}
        {...register("full_name")}
      />

      <input
        id="email"
        placeholder="Email"
        required
        defaultValue={modal.type !== "register" ? contactEdit.email : ""}
        type={"email"}
        {...register("email")}
      />

      <input
        type="tel"
        id="telephone"
        required
        defaultValue={modal.type !== "register" ? contactEdit.telephone : ""}
        placeholder="telephone"
        {...register("telephone")}
      />
      <div className="buttons">
        <button type="submit" className="send">
          {modal.type === "register" ? "Register" : "Update"}
        </button>
        <button onClick={() => isModal("")} className="exit">
          <IoExitOutline/>
        </button>
      </div>
    </FormRegisterContactStyle>
  );
}
export default FormRegisterContact;

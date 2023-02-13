import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/user_interfaces";
import { AuthContext } from "../../providers/context";
import { Form } from "../../style/form/style";

function FormRegister() {
  const { signRegister } = useContext(AuthContext);

  const { register, handleSubmit } = useForm<IUser>();

  return (
    <Form onSubmit={handleSubmit(signRegister)}>
      <h1>Register to continue</h1>

      <input
        id="name_and_surname"
        placeholder="Full name"
        required
        type={"text"}
        {...register("name_and_surname")}
      />

      <input
        id="email"
        placeholder="Email"
        required
        type={"email"}
        {...register("email")}
      />

      <input
        type="password"
        id="password"
        required
        placeholder="Password"
        {...register("password")}
      />
      <button type="submit">Register</button>
      <span>
        <p>
          Already have account? <Link to="/">sign in</Link>
        </p>
      </span>
    </Form>
  );
}
export default FormRegister;

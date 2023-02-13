import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IUserLogin } from "../../interfaces/user_interfaces";
import { AuthContext } from "../../providers/context";
import { Form } from "../../style/form/style";

function FormLogin() {
  const { signIn, api, setUser, navigate, token } = useContext(AuthContext);
  // if (token) {
  //   api.defaults.headers.common.authorization = `Bearer ${token}`;
  //   api.get(`/profile`).then((data) => {
  //     setUser(data.data);
  //     navigate("/dashboard", { replace: true });
  //   });
  // }

  const {
    register,
    handleSubmit,
  } = useForm<IUserLogin>();

  return (
    <Form onSubmit={handleSubmit(signIn)}>
      <h1>Login to continue</h1>

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
      <button type="submit">Sign in</button>
      <span>
        <p>
          Don't have an account yet? <Link to="/register">Register</Link>
        </p>
      </span>
    </Form>
  );
}
export default FormLogin;

import React from "react";
import useForm from "../../hooks/useForm";
import { AuthContext } from "../../auth/AuthContext";
import styles from "./Login.module.css";


const Login = () => {
  const { userForm, handleChange, handleSubmit } = useForm(AuthContext);

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit}>
        <h1>Bienvenido</h1>

          <input
            type="text"
            name="username"
            value={userForm.username}
            onChange={handleChange}
          ></input>

          <input
            type="password"
            name="password"
            value={userForm.password}
            onChange={handleChange}
          ></input>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;

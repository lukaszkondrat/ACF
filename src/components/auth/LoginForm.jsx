import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLogin } from "./useLogin";

import ButtonBack from "../ui/ButtonBack";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

import styles from "./LoginForm.module.css";

function LoginForm() {
  const initialState = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const [user, setUser] = useState(initialState);

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!user.email || !user.password) return;
    login(user, {
      onSettled: () => {
        setUser(initialState);
      },
    });
  }

  return (
    <div className={styles.container}>
      <Logo />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.item}>
          <label htmlFor="email">Email address: </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
            disabled={isLoading}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
            disabled={isLoading}
          />
        </div>
        <Button btnWidth="8rem" type="submit" disabled={isLoading}>
          Login
        </Button>
      </form>
      <ButtonBack onClick={() => navigate("/travels")} />
    </div>
  );
}

export default LoginForm;

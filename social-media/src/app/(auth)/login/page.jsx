import { handleLogin } from "@lib/actions";
import styles from "./login.module.css";
import LoginForm from "@components/loginForm/LoginForm";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
        <form action={handleLogin}>
          <button className={styles.github}>SignIn with Github</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

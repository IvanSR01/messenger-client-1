import { FC } from "react";
import styles from "./Auth.module.scss";
import Login from "./login/Login";
import Register from "./register/Register";
import Email from "./email/Email";
interface IAuthPage {
  page: "login" | "register";
}

const pages: any = {
  login: () => <Login />,
  register: () => <Register />,
  email: () => <Email />,
};
const Auth: FC<IAuthPage> = ({ page }) => {
  return <div className={styles.authWrapper}>{pages[page]()}</div>;
};

export default Auth;

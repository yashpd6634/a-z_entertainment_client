import { useContext, useState } from "react";
import classes from "./Login.module.css";
import { AuthContext } from "../../authContext/AuthContext";
import { login } from "../../authContext/ApiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch} = useContext(AuthContext);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login({email, password}, dispatch);
  };
  return (
    <div className={classes.login}>
      <div className={classes.top}>
        <div className={classes.wrapper}>
          <img
            className={classes.logo}
            src="https://scontent.fbho4-1.fna.fbcdn.net/v/t39.30808-6/300113770_172427958655823_271369692906077129_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Gz_ZnRjOBYgAX9uIhxq&_nc_ht=scontent.fbho4-1.fna&oh=00_AfBCDxZ_P7WJ4T3efl9HgdlGL437D5VLTm9n0XPKfWRCqQ&oe=65A91372"
            alt=""
          />
        </div>
      </div>
      <div className={classes.container}>
        <form className={classes.form}>
          <h1>Sign In</h1>
          <input
            className={classes.input}
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={classes.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={classes.loginButton} onClick={handleLogin}>
            Sign In
          </button>
          <span className={classes.span}>
            New to Netflix? <b className={classes.b}>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;

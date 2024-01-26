import React, { useRef, useState } from 'react'
import classes from "./Register.module.css"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
  
    const handleStart = () => {
      setEmail(emailRef.current?.value || '');
    };
    const handleFinish = () => {
      setPassword(passwordRef.current?.value || '');
    };
    return (
      <div className={classes.register}>
        <div className={classes.top}>
          <div className={classes.wrapper}>
            <img
              className={classes.logo}
              src="https://scontent.fbho4-1.fna.fbcdn.net/v/t39.30808-6/300113770_172427958655823_271369692906077129_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Gz_ZnRjOBYgAX9uIhxq&_nc_ht=scontent.fbho4-1.fna&oh=00_AfBCDxZ_P7WJ4T3efl9HgdlGL437D5VLTm9n0XPKfWRCqQ&oe=65A91372"
              alt=""
            />
            <button className={classes.loginButton}>Sign In</button>
          </div>
        </div>
        <div className={classes.container}>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          {!email ? (
            <div className={classes.input}>
              <input type="email" placeholder="email address" ref={emailRef} />
              <button className={classes.registerButton} onClick={handleStart}>
                Get Started
              </button>
            </div>
          ) : (
            <form className={classes.input}>
              <input type="password" placeholder="password" ref={passwordRef} />
              <button className={classes.registerButton} onClick={handleFinish}>
                Start
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

export default Register
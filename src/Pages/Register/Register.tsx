import React, { useRef, useState } from "react";
import classes from "./Register.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleStart = () => {
    setEmail(emailRef.current?.value || "");
  };
  const handleFinish = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    console.log(`username - ${username}`);
    try {
      await axios.post("auth/register", { email, username, password });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes.register}>
      <div className={classes.top}>
        <div className={classes.wrapper}>
          <StyledSpan className={classes.logo}>A-Z Entertainment</StyledSpan>
          <Link to="/login" className={classes.loginButton}>
            <span>Sign In</span>
          </Link>
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
            <input type="text" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className={classes.registerButton} onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const StyledSpan = styled.span`
  font-family: "Lobster", cursive;
  /* Add other styles as needed */
`;

export default Register;

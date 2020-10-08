import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login-signin__button">Sign In</button>
        </form>

        <p>
          By signing-in you are agree to the Amazon Fake Clone Conditions of Use
          & Sale. Please see our Privancy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>

        <button className="login-register__button">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;

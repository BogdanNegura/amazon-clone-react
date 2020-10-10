import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

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
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login-signin__button"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you are agree to the Amazon Fake Clone Conditions of Use
          & Sale. Please see our Privancy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>

        <button onClick={register} className="login-register__button">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;

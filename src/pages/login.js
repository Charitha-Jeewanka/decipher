import React from "react";
import "../styles/login.css";
import { tokenBreak } from "../authentications/tokenbreak";

const clickHandler = () => {
  tokenBreak(1);
};

const login = () => {
  return (
    <section>
      <div className="login">
        <div className="app-title">
          <h1>Login</h1>
        </div>
        <div className="login-form">
          <div className="control-group">
            <input
              type="email"
              class="login-field"
              value=""
              placeholder="email"
              id="login-pass"
            />
            <label class="login-field-icon fui-lock" for="login-pass"></label>
          </div>
          <div className="control-group">
            <input
              type="password"
              class="login-field"
              value=""
              placeholder="password"
              id="login-pass"
            />
            <label class="login-field-icon fui-lock" for="login-pass"></label>
          </div>
          <button class="btn btn-primary btn-large btn-block" href="#">
            Login
          </button>
          <button
            class="btn btn-primary btn-large btn-block"
            onClick={clickHandler}
          >
            Register
          </button>
          <a class="login-link" href="#">
            Lost your password?
          </a>
        </div>
      </div>
    </section>
  );
};

export default login;

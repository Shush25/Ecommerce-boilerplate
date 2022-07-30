import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "./login.styles.scss";

import axios from "axios";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { UsersContext } from "../../services/user.context";

const LoginPage = () => {
  const { currentUser, setCurrentUser } = useContext(UsersContext);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginCheck = () => {
    axios
      .post("https://shush-assignment-1.herokuapp.com/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        setCurrentUser(response.data.user);
        setError(null);
        console.log(currentUser);
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };
  return (
    <div className="section-login">
      <div className="row">
        <div className="login">
          <div className="__login-box">
            <div className="u-margin-bottom-small">
              <h1>Login</h1>
            </div>
            <CustomInput
              label={"Enter your Email"}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <CustomInput
              label={"Enter your Password"}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="row">
              <div className="col-1-of-2">
                <Link to="/register" className="bottom-text">
                  New User? Create an account
                </Link>
              </div>
              <div className="col-1-of-2">
                <CustomButton
                  onClick={() => {
                    LoginCheck();
                  }}
                  label="Login"
                />
              </div>
            </div>
            <h1>{error}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

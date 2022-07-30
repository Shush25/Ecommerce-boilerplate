import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./register.styles.scss";

import axios from "axios";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const RegisterPage = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  /* Function to Register Users called when button is pressed note onpress enter is not handled */

  const RegisterUser = () => {
    axios
      .post("https://shush-assignment-1.herokuapp.com/register", {
        email: email,
        password: password,
        firstname: firstName,
        lastname: lastName,
      })
      .then((res) => {
        setError("Registered Successfully");
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data);
      });
  };
  return (
    <div className="section-login">
      <div className="row">
        <div className="login">
          <div className="__login-box">
            <div className="u-margin-bottom-small">
              <h1>Register</h1>
            </div>
            <CustomInput
              label={"Enter Your First Name"}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <CustomInput
              label={"Enter Your Last Name"}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
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
                <Link className="bottom-text" to="/login">
                  Already a User? Login
                </Link>
              </div>
              <div className="col-1-of-2">
                <CustomButton
                  onClick={() => {
                    RegisterUser();
                  }}
                  label="Register"
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

export default RegisterPage;

import React from "react";
import { Formik, Form } from "formik";
import Logo from "../../../assets/images/logo.svg";
import Input from "../../../common/components/input/Input";
import Checkbox from "../../../common/components/checkbox/Checkbox";

const Login = () => {
  return (
    <div className="registration-container login-container">
      <img src={Logo} alt="Upaway" className="logo" />
      <h2 className="title">Trip Support Dashboard</h2>
      <Formik>
        <Form>
          <Input placeholder="Enter Email" label="Email" type="email" />
          <Input
            placeholder="Enter Password"
            label="Password"
            type="password"
          />
          <div className="container-forgot-remember">
            <Checkbox label="Remember Me" />
            <button className="button-link button-forgot-pwd">
              Forgot Password?
            </button>
          </div>
          <button className="button button-register">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;

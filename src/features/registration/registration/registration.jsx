import React from "react";
import { Formik, Form } from "formik";
import Logo from "../../../assets/images/logo.svg";
import Input from "../../../common/components/input/Input";

const Registration = () => {
  return (
    <div className="registration-container">
      <img src={Logo} alt="Upaway" className="logo" />
      <h2 className="title">Complete registration</h2>
      <Formik>
        <Form>
          <Input placeholder="Your Email" label="Email" type="email" />
          <div className="passowrd-container">
            <Input placeholder="Password" label="Password" type="password" />
            <span className="password-length">Password strenght: Strong</span>
          </div>
          <Input
            placeholder="Password"
            label="Confirm Password"
            type="password"
          />
          <button className="button button-register">Register account</button>
        </Form>
      </Formik>
      <div className="login-text">
        Already have an account? <button className="button-link">Log in</button>
      </div>
    </div>
  );
};

export default Registration;

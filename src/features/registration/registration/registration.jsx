import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";
import Input from "../../../common/components/input/Input";
import Layout from "../../../common/components/layout/layout";

const Registration = () => {
  return (
    <Layout>
      <div className="registration-container">
        <img src={Logo} alt="Upaway" className="logo" />
        <h2 className="title">Complete registration</h2>
        <Formik>
          <Form>
            <Input placeholder="Your Email" label="Email" type="email" />
            <div className="passowrd-container">
              <Input placeholder="Password" label="Password" type="password" />
              <span className="password-length">Password strength: Strong</span>
            </div>
            <Input
              placeholder="Password"
              label="Confirm Password"
              type="password"
            />
            {/* <button className="button button-register">Register account</button> */}
            <Link to="/registration-success" className="button button-register">
              Register account
            </Link>
          </Form>
        </Formik>
        <div className="login-text">
          Already have an account?{" "}
          {/* <button className="button-link">Log in</button> */}
          <Link className="button-link" to="/login">Log in</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;

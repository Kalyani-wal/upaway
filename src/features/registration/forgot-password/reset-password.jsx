import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";
import Input from "../../../common/components/input/Input";
import Layout from "../../../common/components/layout/layout";

const ResetPassword = () => {
  return (
    <Layout>
      <div className="registration-container reset-password-container">
        <img src={Logo} alt="Upaway" className="logo" />
        <h2 className="title">Reset Password</h2>
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
            <Link to="/reset-password-success" className="button">
              Reset Password
            </Link>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
};

export default ResetPassword;

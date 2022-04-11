import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";
import Input from "../../../common/components/input/Input";
import Checkbox from "../../../common/components/checkbox/Checkbox";
import Layout from "../../../common/components/layout/layout";

const Login = () => {
  return (
    <Layout>
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
            <Link to="/dashboard" className="button button-register">
              Login
            </Link>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
};

export default Login;

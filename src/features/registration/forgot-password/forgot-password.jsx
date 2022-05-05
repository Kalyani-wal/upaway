import React, { useState } from "react";
import { Formik, Form } from "formik";
import Logo from "../../../assets/images/logo.svg";
import Input from "../../../common/components/input/Input";
import Layout from "../../../common/components/layout/layout";
import CodeValidation from './code-validation';

const ForgotPassword = () => {
  const [code, setCode] = useState(false);
  return (
    <Layout>
      <div className="registration-container forgot-password-container">
        <img src={Logo} alt="Upaway" className="logo" />
        {!code ? (
          <>
            <h2 className="title">Reset password</h2>
            <p className="description">
              Insert your phone number and we’ll send you a SMS with
              verification code to reset your password
            </p>
            <Formik>
              <Form>
                <Input
                  placeholder="Enter Phone number"
                  label="Phone number"
                  type="phone"
                />
                <button className="button" onClick={() => setCode(true)}>
                  Send Verification Code
                </button>
              </Form>
            </Formik>
          </>
        ) : (
          <CodeValidation />
        )}
      </div>
    </Layout>
  );
};

export default ForgotPassword;

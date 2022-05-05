import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../common/components/layout/layout";

const ResetPasswordSuccess = () => {
  return (
    <Layout className="layout-wrapper-success">
      <div className="container-message">
        <h2>
          Great!
          <span>Your password has been restored</span>
        </h2>
        <Link className="button button-login" to="/dashboard">
          Go to my Dashboard
        </Link>
      </div>
    </Layout>
  );
};

export default ResetPasswordSuccess;

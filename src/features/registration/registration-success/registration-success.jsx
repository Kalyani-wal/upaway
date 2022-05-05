import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../common/components/layout/layout";

const RegistrationSuccess = () => {
  return (
    <Layout className="layout-wrapper-success">
      <div className="container-message">
        <h2>
          Great! <br />
          Glad to have you here.
        </h2>
        <Link className="button button-login" to="/login">Login</Link>
      </div>
    </Layout>
  );
};

export default RegistrationSuccess;

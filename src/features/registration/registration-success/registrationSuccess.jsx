import React from "react";
import Layout from "../../../common/components/layout/layout";

const RegistrationSuccess = () => {
  return (
    <Layout className="layout-wrapper-success">
      <div className="container-message">
        <h2>
          Great! <br />
          Glad to have you here.
        </h2>
        <button className="button button-login">Login</button>
      </div>
    </Layout>
  );
};

export default RegistrationSuccess;

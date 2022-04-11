import React from "react";
import Layout from "../../../common/components/layout/layout";
import LogoSplash from "../../../assets/images/logo-spalsh.svg";

const Splash = () => {
  return (
    <Layout>
      <img src={LogoSplash} alt="Upaway" />
    </Layout>
  );
};

export default Splash;

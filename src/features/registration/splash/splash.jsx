import React from "react";
import Layout from "../../../common/components/layout/layout";
import LogoSplash from '../../../assets/images/logo-spalsh.svg';

import Registration from '../registration/registration';
import Login from '../login/login';

const Splash = () => {
  return (
    <Layout>
       {/* <img src={LogoSplash} alt="Upaway" /> */}
      {/* <Registration /> */}
      <Login />
    </Layout>
  );
};

export default Splash;

import React from "react";
import PageLayout from "../../common/components/layout/page-layout";
import Snapshot from "./snapshot";
import Analytics from "./analytics";
import Activities from "./activities";
import Profile from "./profile";

const Dashboard = () => {
  return (
    <PageLayout
      className="wrapper-page-layout-dashboard"
      headerText="Welcome to Upaway, Olivia"
    >
      <Snapshot />
      <Analytics />
      <div className="container-activities-profile">
        <Activities />
        <Profile />
      </div>
    </PageLayout>
  );
};

export default Dashboard;

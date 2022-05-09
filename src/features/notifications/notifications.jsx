import React from "react";
import PageLayout from "../../common/components/layout/page-layout";
import Pagination from "../../common/components/pagination/pagination";
import NotificationsCard from "./notifications-card";

const Notifications = () => {
  return (
    <PageLayout
      className="wrapper-page-layout-notifications"
      headerText="Notifications"
    >
      <div className="container-notifications">
        <NotificationsCard message="Regina Cooper left a review" time="6 hours" />
        <NotificationsCard message="Regina Cooper left a review" time="6 hours" type="file" />
      </div>
      <Pagination />
    </PageLayout>
  );
};

export default Notifications;

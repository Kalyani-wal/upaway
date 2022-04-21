import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import cx from "classnames";
import PageLayout from "../../../common/components/layout/page-layout";
import TripPlans from "./trip-plans/trip-plans";
import Details from "./details/details";
import PaymentDetails from "./payment-details/payment-details";
import Documents from "./documents/documents";

const TravelersProfile = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <PageLayout
      className="wrapper-page-layout-travelers-profile"
      headerText="Andrew Carter"
      breadcrumbs
    >
      <div className="container-profile-tabs">
        <Nav tabs className="tabs-profiles">
          <NavItem>
            <NavLink
              className={cx({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Trip plans
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={cx({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={cx({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Payment Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={cx({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              Documents
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <TripPlans />
          </TabPane>
          <TabPane tabId="2">
            <Details />
          </TabPane>
          <TabPane tabId="3">
            <PaymentDetails />
          </TabPane>
          <TabPane tabId="4">
            <Documents />
          </TabPane>
        </TabContent>
      </div>
    </PageLayout>
  );
};

export default TravelersProfile;

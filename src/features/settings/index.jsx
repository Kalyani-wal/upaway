import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import cx from "classnames";
import PageLayout from "../../common/components/layout/page-layout";
import MyDetails from "./my-details/my-details";
import Password from "./password/password";
import Team from "./team/team";
import Notifications from "./notifications/notifications";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <PageLayout
      className="wrapper-page-layout-travelers-profile wrapper-page-layout-settings"
      headerText="Settings"
    >
      <div className="container-profile-tabs container-settings-tabs">
        <Nav tabs className="tabs-profiles tabs-settings">
          <NavItem>
            <NavLink
              className={cx({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              My details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={cx({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Password
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={cx({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Team <span>3</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={cx({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              Notifications
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <MyDetails />
          </TabPane>
          <TabPane tabId="2">
            <Password />
          </TabPane>
          <TabPane tabId="3">
            <Team />
          </TabPane>
          <TabPane tabId="4">
            <Notifications />
          </TabPane>
        </TabContent>
      </div>
    </PageLayout>
  );
};

export default Settings;

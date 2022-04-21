import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import cx from "classnames";
import IconBars from "../../../assets/images/icon-bars.png";
import CheckboxFilter from "./checkbox-filter";

const Filters = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [activeTab, setActiveTab] = useState("1");
  const toggleTabs = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const filterList = [
    {
      label: "Show Cancelled trips",
      description: "Show trips that has been cancelled by the traveler",
    },
    {
      label: "Show trips with Cancelled flight",
      description: "Show trips that had cancelled flights",
    },
    {
      label: "Show trips with Cancelled accomodation",
      description: "Show trips that had cancelled accomodations",
    },
    {
      label: "Show groups trips",
      description: "Show trips with more than a traveler",
    },
    {
      label: "Show trips with Trip gap",
      description: "Show trips with Trip gap",
    },
  ];
  return (
    <div className="container-filters">
      <Dropdown toggle={toggle} isOpen={dropdownOpen}>
        <DropdownToggle className="btn-filter">
          <img src={IconBars} alt="Bars Icon" />
          <span>More filters</span>
        </DropdownToggle>
        <DropdownMenu>
          <h3 className="title">Filters</h3>
          <div className="list-dropdown-items">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={cx({ active: activeTab === "1" })}
                  onClick={() => {
                    toggleTabs("1");
                  }}
                >
                  National
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={cx({ active: activeTab === "2" })}
                  onClick={() => {
                    toggleTabs("2");
                  }}
                >
                  Internationals
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                {filterList?.map((item) => {
                  return (
                    <CheckboxFilter
                      key={item.label}
                      label={item.label}
                      description={item.description}
                    />
                  );
                })}
              </TabPane>
              <TabPane tabId="2">
                {filterList?.map((item) => {
                  return (
                    <CheckboxFilter
                      key={item.label}
                      label={item.label}
                      description={item.description}
                    />
                  );
                })}
              </TabPane>
            </TabContent>
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Filters;

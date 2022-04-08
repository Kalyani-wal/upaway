import React from "react";
import PropTypes from "prop-types";
import SideNav from '../../../features/navigation/sidenav';
// import { Breadcrumbs } from "../index";
import cx from "classnames";

const PageLayout = (props) => {
  const {
    children,
    className,
    headerText,
    crumbMapping,
  } = props;
  return (
    <div className={cx(className, "wrapper-page-layout")}>
      <div className="layout-left-section"><SideNav /></div>
      <section className="layout-page-section">
        <div className="page-header">
          {/* <Breadcrumbs crumbMapping={crumbMapping} /> */}
          <h1>{headerText}</h1>
        </div>
        <div className="page-body">{children}</div>
      </section>
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  headerText: PropTypes.string,
  crumbMapping: PropTypes.arrayOf(PropTypes.object),
  subHeaderText: PropTypes.string,
  renderRightContent: PropTypes.func,
  renderHeader: PropTypes.func,
  cardAfterBreadCrumb: PropTypes.arrayOf(PropTypes.object),
};

PageLayout.defaultProps = {
  children: null,
  className: "",
  headerText: "",
  crumbMapping: [],
  subHeaderText: "",
  renderRightContent: () => {},
  renderHeader: null,
  cardAfterBreadCrumb: [],
};

export default PageLayout;

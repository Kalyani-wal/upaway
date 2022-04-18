import React from "react";
import PropTypes from "prop-types";
import SideNav from "../../../features/navigation/sidenav";
import Breadcrumbs from "../breadcrumb/Breadcrumb";
import cx from "classnames";

const PageLayout = (props) => {
  const { children, className, headerText, breadcrumbs } = props;
  return (
    <div className={cx(className, "wrapper-page-layout")}>
      <div className="layout-left-section">
        <SideNav />
      </div>
      <section className="layout-page-section">
        <div className="page-header">
          {breadcrumbs && <Breadcrumbs />}
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
  breadcrumbs: PropTypes.bool,
};

PageLayout.defaultProps = {
  children: null,
  className: "",
  headerText: "",
  breadcrumbs: false
};

export default PageLayout;

import React from "react";
import { Collapse } from "reactstrap";
import cx from "classnames";

const CollapsiblePanel = ({ isOpen, children, className }) => {
  return (
    <Collapse isOpen={isOpen} className={cx("panel-collapse", className)}>
      {children}
    </Collapse>
  );
};

export default CollapsiblePanel;

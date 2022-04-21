/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Label } from "reactstrap";
import { Field } from "formik";
import PropTypes from "prop-types";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CheckboxFilter = ({
  simple,
  description,
  label,
  labelMargin,
  disabled,
  className,
  wrapperClassName,
  formInput,
  ...rest
}) => (
  <div className={cx("checkbox-wrapper checkbox-filter-wrapper", wrapperClassName)}>
    <Label className={cx("checkbox-inline", { disabled })}>
      <div className={className ? className : "label"}>
        {label}
        {description && <span>{description}</span>}
      </div>
      <input type="checkbox" disabled={disabled} {...rest} />
      {/* {simple ? (
        <input type="checkbox" disabled={disabled} {...rest} />
       ) : (
       <Field type="checkbox" {...rest} disabled={disabled} />
      )} */}
      <span className="custom-checkbox">
        <FontAwesomeIcon icon={faCheck} />
      </span>
    </Label>
  </div>
);

CheckboxFilter.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  simple: PropTypes.bool,
  disabled: PropTypes.bool,
  labelMargin: PropTypes.number,
  wrapperClassName: PropTypes.string,
};

CheckboxFilter.defaultProps = {
  simple: false,
  disabled: false,
  labelMargin: 10,
  wrapperClassName: "",
};

export default CheckboxFilter;

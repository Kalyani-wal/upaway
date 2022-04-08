/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Label } from "reactstrap";
import { Field } from "formik";
import PropTypes from "prop-types";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Checkbox = ({
  simple,
  label,
  labelMargin,
  disabled,
  className,
  wrapperClassName,
  formInput,
  ...rest
}) => (
  <div className={cx("checkbox-wrapper", wrapperClassName)}>
    <Label className={cx("checkbox-inline", { disabled })}>
      <span className={className ? className : "label"}>{label}</span>
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

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  simple: PropTypes.bool,
  disabled: PropTypes.bool,
  labelMargin: PropTypes.number,
  wrapperClassName: PropTypes.string,
};

Checkbox.defaultProps = {
  simple: false,
  disabled: false,
  labelMargin: 10,
  wrapperClassName: "",
};

export default Checkbox;

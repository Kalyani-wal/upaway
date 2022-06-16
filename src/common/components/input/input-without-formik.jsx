/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import IconEye from "../../../assets/images/icon-eye.png";
import IconAlert from "../../../assets/images/icon-alert.png";

const Input = ({
  icon,
  name,
  size,
  type,
  label,
  disabled,
  required,
  onKeyPress,
  placeholder,
  errorMessage,
  wrapperClassname,
  ...rest
}) => {
  return (
    <div
      className={classNames("input-field", wrapperClassname, {
        "input-field-with-error" : errorMessage
      })}
    >
      {label && (
        <label htmlFor={name}>
          {label} <span>{required ? "*" : ""}</span>
        </label>
      )}
      <div className="container-input-error">
      <input
        className={classNames("input", size)}
        disabled={disabled}
        required={required}
        type={type}
        name={name}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        {...rest}
      />
      {errorMessage && (
        <div className="error-msg">
          <span>{errorMessage}</span>
        </div>
      )}
      {(type === "password" && !errorMessage) ? (
        <span className="icon-eye">
          <img src={IconEye} alt="Icon Eye" />
        </span>
      ) : null}
      {type === "password" && errorMessage ? (
        <span className="error-icon">
          <img src={IconAlert} alt="Icon Alert" />
        </span>
      ) : null}
      </div>
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(["md", "sm"]),
  type: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  icon: "",
  name: "",
  size: "md",
  type: "text",
  label: "",
  disabled: false,
  required: false,
  formInput: false,
  onKeyPress: () => {},
  placeholder: "",
  errorMessage: ""
};

export default Input;

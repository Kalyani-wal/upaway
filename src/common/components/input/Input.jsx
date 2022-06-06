/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Field, ErrorMessage } from "formik";
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
  formInput,
  onKeyPress,
  placeholder,
  rightContent,
  typePassword,
  ...rest
}) => {
  return (
    <div
      className={classNames("input-field", {
        "with-icon": icon,
        [icon]: icon,
      })}
    >
      {label && (
        <label htmlFor={name}>
          {label} <span>{required ? "*" : ""}</span>
        </label>
      )}
      {rightContent && (
        <span className="input-right-content">{rightContent}</span>
      )}
      {formInput ? (
        <Field
          name={name}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          className={classNames("form-control", "input", size)}
          {...rest}
        />
      ) : (
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
      )}
      {(type === "password" && !formInput) ? (
        <span className="icon-eye">
          <img src={IconEye} alt="Icon Eye" />
        </span>
      ): null}
      {formInput && (
        <>
          {type === "password" && (
            <span className="error-icon">
              <img src={IconAlert} alt="Icon Alert" />
            </span>
          )}
          <div className="error-msg">
            <ErrorMessage name={name} />
          </div>
        </>
      )}
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
  formInput: PropTypes.bool,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  rightContent: PropTypes.node,
  typePassword: PropTypes.bool,
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
  rightContent: "",
  typePassword: false,
};

export default Input;

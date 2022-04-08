/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Field, ErrorMessage } from "formik";
import Eye from "../../../assets/images/eye.svg";

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
      {type === "password" && (
        <span className="icon-eye">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.666504 7.00008C0.666504 7.00008 3.33317 1.66675 7.99984 1.66675C12.6665 1.66675 15.3332 7.00008 15.3332 7.00008C15.3332 7.00008 12.6665 12.3334 7.99984 12.3334C3.33317 12.3334 0.666504 7.00008 0.666504 7.00008Z"
              stroke="#8EA3A8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99984 9.00008C9.10441 9.00008 9.99984 8.10465 9.99984 7.00008C9.99984 5.89551 9.10441 5.00008 7.99984 5.00008C6.89527 5.00008 5.99984 5.89551 5.99984 7.00008C5.99984 8.10465 6.89527 9.00008 7.99984 9.00008Z"
              stroke="#8EA3A8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      )}
      {formInput && (
        <>
          <span className="error-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99967 5.33325V7.99992M7.99967 10.6666H8.00634M14.6663 7.99992C14.6663 11.6818 11.6816 14.6666 7.99967 14.6666C4.31778 14.6666 1.33301 11.6818 1.33301 7.99992C1.33301 4.31802 4.31778 1.33325 7.99967 1.33325C11.6816 1.33325 14.6663 4.31802 14.6663 7.99992Z"
                stroke="#F04438"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
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

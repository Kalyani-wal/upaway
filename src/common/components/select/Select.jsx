import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from "formik";
import { default as ReactSelect } from 'react-select';
import classNames from 'classnames';

const Select = ({
  label,
  formInput,
  name,
  required,
  className,
  placeholder,
  size,
  disabled,
  wrapperClassName,
  kind,
  selectRef,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        'select-wrapper',
        size,
        wrapperClassName
      )}
    >
      {label && (
        <label htmlFor={name}>
          {label} <span>{required ? '*' : ''}</span>
        </label>
      )}
      <ReactSelect
        {...rest}
        classNamePrefix={className || 'select-dropdown'}
        isDisabled={disabled}
        placeholder={placeholder}
        ref={selectRef}
      />
      {/* {formInput && (
        <div className="error-msg">
          <ErrorMessage name={name} />
        </div>
      )} */}
    </div>
  );
};

Select.propTypes = {
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
  formInput: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  isMulti: PropTypes.bool,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  onChange: PropTypes.func.isRequired,
  kind: PropTypes.oneOf(['minimal', 'normal']),
};

Select.defaultProps = {
  className: '',
  formInput: true,
  required: false,
  disabled: false,
  label: '',
  placeholder: 'Select',
  size: 'sm',
  kind: 'normal',
  isMulti: false,
  wrapperClassName: '',
};

export default Select;

import React from 'react';
import PropTypes from 'prop-types';
import { default as ReactSelect } from 'react-select';
import classNames from 'classnames';

const Select = ({
  label,
  name,
  required,
  className,
  placeholder,
  size,
  disabled,
  wrapperClassName,
  kind,
  selectRef,
  errorMessage,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        'select-wrapper',
        size,
        wrapperClassName,
        {'select-wrapper-with-error' : errorMessage}
      )}
    >
      {label && (
        <label htmlFor={name}>
          {label} <span>{required ? '*' : ''}</span>
        </label>
      )}
      <div className="container-select-error">
      <ReactSelect
        {...rest}
        classNamePrefix={className || 'select-dropdown'}
        isDisabled={disabled}
        placeholder={placeholder}
        ref={selectRef}
      />
      {errorMessage && (
        <div className="error-msg">
          <span>{errorMessage}</span>
        </div>
      )}
      </div>
    </div>
  );
};

Select.propTypes = {
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  isMulti: PropTypes.bool,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  onChange: PropTypes.func.isRequired,
  kind: PropTypes.oneOf(['minimal', 'normal']),
  errorMessage: PropTypes.string,
};

Select.defaultProps = {
  className: '',
  required: false,
  disabled: false,
  label: '',
  placeholder: 'Select',
  size: 'sm',
  kind: 'normal',
  isMulti: false,
  wrapperClassName: '',
  errorMessage: ''
};

export default Select;

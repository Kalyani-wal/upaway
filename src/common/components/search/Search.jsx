import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Search = props => {
  const {
    searchText,
    placeholder,
    handleChange,
    handleTrigger,
    wrapperClassName,
  } = props;

  return (
    <div className={cx('common-search', wrapperClassName)}>
      <input
        className="local-search"
        placeholder={placeholder || 'Search ...'}
        onChange={handleChange}
        // value={searchText}
        onKeyPress={handleTrigger}
        type="search"
      />
    </div>
  );
};

Search.propTypes = {
  searchText: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  handleTrigger: PropTypes.func,
  wrapperClassName: PropTypes.string,
};

Search.defaultProps = {
  searchText: '',
  placeholder: '',
  handleChange: () => {},
  handleTrigger: () => {},
  wrapperClassName: '',
};

export default Search;

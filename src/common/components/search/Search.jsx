import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import IconSearch from "../../../assets/images/icon-search.png";

const Search = (props) => {
  const {
    searchText,
    placeholder,
    handleChange,
    handleTrigger,
    wrapperClassName,
    searchIcon,
  } = props;

  return (
    <div className={cx("common-search", wrapperClassName, {"search-with-icon" : IconSearch})}>
      <input
        className="local-search"
        placeholder={placeholder || "Search ..."}
        onChange={handleChange}
        // value={searchText}
        onKeyPress={handleTrigger}
        type="search"
      />
      {searchIcon && <img src={IconSearch} alt="Search" className="icon-search" />}
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
  searchText: "",
  placeholder: "",
  handleChange: () => {},
  handleTrigger: () => {},
  wrapperClassName: "",
};

export default Search;

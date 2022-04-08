/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import LeftArrow from "../../../assets/images/arrow-left.png";
import RightArrow from "../../../assets/images/arrow-right.png";

const Pagination = ({ wrapperClassName, ...rest }) => {
  return (
    <div className={cx("container-pagination", wrapperClassName)}>
      <a href="^_^" className="prevoius">
        <img src={LeftArrow} alt="Left Arrow" />
        Previous
      </a>
      <ul className="page-numbers">
        <a href="^_^" className="active">
          1
        </a>
        <a href="^_^">2</a>
        <a href="^_^">3</a>
        <span className="more-pages">...</span>
        <a href="^_^">8</a>
        <a href="^_^">9</a>
        <a href="^_^">10</a>
      </ul>
      <a href="^_^" className="prevoius next">
        Next
        <img src={RightArrow} alt="Right Arrow" />
      </a>
    </div>
  );
};

Pagination.propTypes = {
  wrapperClassName: PropTypes.string,
};

Pagination.defaultProps = {
  wrapperClassName: "",
};

export default Pagination;

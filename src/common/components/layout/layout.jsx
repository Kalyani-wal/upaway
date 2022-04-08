import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Layout = props => {
  const { children, className } = props;
  return (
    <div className={cx('layout-wrapper', className)}>
      <div className="layout-content">
        {children}
        </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;

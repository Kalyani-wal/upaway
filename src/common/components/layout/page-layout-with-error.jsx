/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from './page-layout';
import ErrorBlock from '../error-block/error-block';

const PageLayoutWithError = props => {
  const {
    loading,
    error,
    errorMessage,
    children,
    loadingNode,
    ...rest
  } = props;

  return (
    <PageLayout {...rest}>
      {loading && loadingNode}
      {!loading &&
        (error ? <ErrorBlock errorMessage={errorMessage} /> : <>{children}</>)}
    </PageLayout>
  );
};

PageLayoutWithError.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any.isRequired,
  loadingNode: PropTypes.node,
  children: PropTypes.node,
  errorMessage: PropTypes.string,
};

// Since default error message is defined in ErrorBlock
PageLayoutWithError.defaultProps = {
  children: null,
  loadingNode: null,
  errorMessage: undefined,
};

export default PageLayoutWithError;

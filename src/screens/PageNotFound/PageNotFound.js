import React from 'react';
import PropTypes from 'prop-types';
import { Button, Result } from 'antd';
import * as ROUTES from '../../constants/routes';

const PageNotFound = ({ history }) => {
  const onBackToHome = () => history.push(ROUTES.HOME);

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={onBackToHome}>
          Back Home
        </Button>
      }
    />
  );
};

PageNotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default PageNotFound;

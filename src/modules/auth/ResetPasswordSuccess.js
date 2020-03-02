import React from 'react';
import './ResetPasswordSuccess.scss';
import { Button } from 'antd';

const ResetPasswordSuccess = ({ onGoToSignIn }) => {
  return (
    <section className="ResetPasswordSuccess">
      <p className="ResetPasswordSuccess__text">
        We have sent you a password reset confirmation email
      </p>
      <Button type="primary" onClick={onGoToSignIn}>
        Sign in
      </Button>
    </section>
  );
};

export default ResetPasswordSuccess;

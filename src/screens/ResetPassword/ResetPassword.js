import React from 'react';
import ResetPasswordForm from '../../components/Forms/ResetPasswordForm';

const ResetPassword = props => {
  return (
    <div className="ResetPassword">
      <ResetPasswordForm {...props} />
    </div>
  );
};

export default ResetPassword;

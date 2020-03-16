import React from 'react';
import SignInForm from '../../modules/auth/components/SignInForm';

const SignIn = props => {
  return (
    <div className="SignIn">
      <SignInForm {...props} />
    </div>
  );
};

export default SignIn;

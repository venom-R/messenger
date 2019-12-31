import React from 'react';
import SignInForm from '../../components/Forms/SignInForm';

const SignIn = props => {
  return (
    <div className="SignIn">
      <SignInForm {...props} />
    </div>
  );
};

export default SignIn;

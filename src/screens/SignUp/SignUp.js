import React from 'react';
import SignUpForm from '../../modules/auth/components/SignUpForm';

const SignUp = props => {
  return (
    <div className="SignUp">
      <SignUpForm {...props} />
    </div>
  );
};

export default SignUp;

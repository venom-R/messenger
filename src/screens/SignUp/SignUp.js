import React from 'react';
import SignUpForm from '../../components/Forms/SignUpForm';

const SignUp = props => {
  return (
    <div className="SignUp">
      <SignUpForm {...props} />
    </div>
  );
};

export default SignUp;

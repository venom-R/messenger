import React, { useState } from 'react';

import { Button, Divider } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import Auth from '../../../firebase/Auth';

const EmailNotVerified = () => {
  const [isSent, setIsState] = useState(false);

  const title = isSent ? 'Email confirmation sent' : 'Verify your Email';
  const text = isSent
    ? 'Check you emails (Spam folder included) for a confirmation email. Refresh this page once you confirmed your email.'
    : 'Check you emails (Spam folder included) for a confirmation email or send another confirmation email.';

  const onResendConfirmEmail = () => {
    Auth.sendEmailVerification().then(() => {
      setIsState(true);
    });
  };
  const onLogout = () => Auth.signOut();

  return (
    <div className="form-membership">
      <div className="form-membership__inner text-center">
        <div className="form-membership__logo">
          <Icon icon={['far', 'comment-dots']} />
        </div>

        <div>
          <h2 className="form-membership__title">{title}</h2>
          <p className="form-membership__text">{text}</p>
        </div>

        <Divider />

        <Button type="primary" disabled={isSent} className="mr-3" onClick={onResendConfirmEmail}>
          Resend email
        </Button>
        <Button onClick={onLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default EmailNotVerified;

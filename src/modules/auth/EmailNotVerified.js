import React, { useState } from 'react';
import { Button } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Auth from '../../firebase/Auth';

const EmailNotVerified = () => {
  const [isSent, setIsState] = useState(false);

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
        {isSent ? (
          <div>
            <h2 className="form-membership__title">Email confirmation sent</h2>
            <p className="form-membership__text">
              Check you emails (Spam folder included) for a confirmation email. Refresh this page
              once you confirmed your email.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="form-membership__title">Verify your Email</h2>
            <p className="form-membership__text">
              Check you emails (Spam folder included) for a confirmation email or send another
              confirmation email.
            </p>
          </div>
        )}
        <div className="pt-3">
          <Button type="primary" disabled={isSent} className="mr-3" onClick={onResendConfirmEmail}>
            Resend confirmation email
          </Button>
          <Button onClick={onLogout}>Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default EmailNotVerified;

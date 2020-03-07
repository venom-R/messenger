import React, { useState } from 'react';

import { Button, Divider, Form, Input } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import * as ROUTES from '../../constants/routes';
import Auth from '../../firebase/Auth';
import { VALIDATION_RULES } from '../../constants/validationsRules';
import ResetPasswordSuccess from './ResetPasswordSuccess';

const ResetPasswordForm = props => {
  const { getFieldDecorator, validateFields } = props.form;
  const [isEmailSent, setIsEmailSent] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        Auth.passwordReset(values.email)
          .then(() => {
            console.log('We have sent you a password reset confirmation email');
            setIsEmailSent(true);
          })
          .catch(err => {
            if (err.code === 'auth/user-not-found') {
              console.log('This e-mail is not registered');
            }
          });
      }
    });
  };

  const onGoToSignUp = () => {
    props.history.push(ROUTES.SIGN_UP);
  };

  const onGoToSignIn = () => {
    props.history.push(ROUTES.SIGN_IN);
  };

  return (
    <div className="form-membership">
      <Form className="form-membership__inner ResetPassword__form" onSubmit={onSubmit}>
        <div className="form-membership__logo">
          <Icon icon={['far', 'comment-dots']} />
        </div>

        <h2 className="form-membership__title text-center">Reset password</h2>

        {!isEmailSent ? (
          <React.Fragment>
            <Form.Item className="form-membership__item">
              {getFieldDecorator('email', {
                rules: VALIDATION_RULES.email,
              })(<Input placeholder="Email" name="email" />)}
            </Form.Item>

            <Form.Item className="mb-2">
              <Button type="primary" htmlType="submit" className="form-membership__submit">
                Submit
              </Button>
            </Form.Item>

            <Divider />
            <div className="text-center">
              <h4 className="form-membership__sub-title">Take a different action.</h4>
              <Button onClick={onGoToSignUp}>Register now!</Button> or{' '}
              <Button onClick={onGoToSignIn}>Login!</Button>
            </div>
          </React.Fragment>
        ) : (
          <ResetPasswordSuccess onGoToSignIn={onGoToSignIn} />
        )}
      </Form>
    </div>
  );
};

const WrappedResetPasswordForm = Form.create({ name: 'reset_password' })(ResetPasswordForm);

export default WrappedResetPasswordForm;

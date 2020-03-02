import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Divider, Form, Input } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import SocialIcon from '../../components/SocialIcon';

import * as ROUTES from '../../constants/routes';
import Auth from '../../firebase/Auth';
import { rules } from './validationsRules';
import { AUTH_ERRORS_CUSTOM_MESSAGES } from '../../firebase/errorMessages';

const SignInForm = props => {
  const { getFieldDecorator, validateFields } = props.form;

  const onSubmit = event => {
    event.preventDefault();
    validateFields((err, values) => {
      const { email, password } = values;
      if (!err) {
        console.log('Received values of form: ', values);
        Auth.signIn(email, password)
          .then(() => {
            props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            console.error(error);
            props.form.setFields({
              email: {
                value: values.email,
                errors: [new Error(AUTH_ERRORS_CUSTOM_MESSAGES[error.code] || error.message)],
              },
              password: {
                value: values.password,
                errors: [new Error(AUTH_ERRORS_CUSTOM_MESSAGES[error.code] || error.message)],
              },
            });
          });
      }
    });
  };

  const onGoToSignUp = () => {
    props.history.push(ROUTES.SIGN_UP);
  };

  return (
    <div className="form-membership__wrapper">
      <Form className="form-membership SignIn__form" onSubmit={onSubmit}>
        <div className="form-membership__logo">
          <Icon icon={['far', 'comment-dots']} />
        </div>

        <h2 className="form-membership__title text-center">Sign in</h2>

        <Form.Item className="form-membership__item">
          {getFieldDecorator('email', {
            rules: rules.email,
          })(<Input placeholder="Email" name="email" />)}
        </Form.Item>

        <Form.Item className="form-membership__item">
          {getFieldDecorator('password', {
            rules: rules.password,
          })(<Input.Password type="password" placeholder="Password" name="password" />)}
        </Form.Item>

        <Form.Item className="mb-2">
          <Button type="primary" htmlType="submit" className="form-membership__submit">
            Sign in
          </Button>
        </Form.Item>

        <div className="text-center">
          <Link className="form-membership__submit" to={ROUTES.RESET_PASSWORD}>
            Reset password
          </Link>
        </div>

        <Divider />
        <div className="text-center">
          <h4 className="form-membership__sub-title">Login with your social media account</h4>
          <button type="button" className="btn btn_transparent">
            <SocialIcon brand="google" />
          </button>
          <button type="button" className="btn btn_transparent">
            <SocialIcon brand="github" />
          </button>
        </div>

        <Divider />
        <div className="text-center">
          <h4 className="form-membership__sub-title">Don't have an account?</h4>
          <Button onClick={onGoToSignUp}>Register now!</Button>
        </div>
      </Form>
    </div>
  );
};

const WrappedSignInForm = Form.create({ name: 'sign_in' })(SignInForm);

export default WrappedSignInForm;

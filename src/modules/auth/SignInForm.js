import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Button, Divider, Form, Input, message } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import SocialIcon from '../../components/SocialIcon';

import Auth from '../../firebase/Auth';
import { createFieldsErrors, getErrorMessage } from './helpers';
import { VALIDATION_RULES } from '../../constants/validationsRules';
import * as ROUTES from '../../constants/routes';

const initialLoginState = {
  loading: false,
  error: null,
};

const SignInForm = props => {
  const { getFieldDecorator, validateFields, getFieldsValue, setFields } = props.form;
  const [loginWithEmailRequest, setLoginWithEmailRequest] = useState(initialLoginState);
  const [loginWithGithubError, setLoginWithGithubError] = useState(null);
  const [loginWithGoogleError, setLoginWithGoogleError] = useState(null);

  const loginWithEmail = async (email, password) => {
    try {
      setLoginWithEmailRequest({ error: null, loading: true });
      await Auth.signIn(email, password);
      props.history.push(ROUTES.HOME);
    } catch (error) {
      setLoginWithEmailRequest({ loading: false, error });
    }
  };

  const onLoginWithGoogle = async () => {
    try {
      await Auth.signInWithGoogle();
    } catch (error) {
      setLoginWithGoogleError(error);
    }
  };

  const onLoginWithGithub = async () => {
    try {
      await Auth.signInWithGithub();
    } catch (error) {
      setLoginWithGithubError(error);
    }
  };

  const onSubmit = async event => {
    event.preventDefault();

    if (loginWithEmailRequest.loading) {
      return;
    }

    validateFields((err, values) => {
      const { email, password } = values;
      if (!err) {
        loginWithEmail(email, password);
      }
    });
  };

  useEffect(() => {
    if (loginWithEmailRequest.error) {
      const values = getFieldsValue();
      setFields(createFieldsErrors(values, loginWithEmailRequest.error));
    }
  }, [loginWithEmailRequest.error, getFieldsValue, setFields]);

  useEffect(() => {
    if (loginWithGithubError || loginWithGoogleError) {
      message.error(getErrorMessage(loginWithGoogleError || loginWithGithubError));
    }
  }, [loginWithGithubError, loginWithGoogleError]);

  return (
    <div className="form-membership">
      <Form className="form-membership__inner SignIn__form" onSubmit={onSubmit}>
        <div className="form-membership__logo">
          <Icon icon={['far', 'comment-dots']} />
        </div>

        <h2 className="form-membership__title text-center">Sign in</h2>

        <Form.Item className="form-membership__item">
          {getFieldDecorator('email', {
            rules: VALIDATION_RULES.email,
          })(<Input placeholder="Email" name="email" autoComplete="username" />)}
        </Form.Item>

        <Form.Item className="form-membership__item">
          {getFieldDecorator('password', {
            rules: VALIDATION_RULES.password,
          })(
            <Input.Password
              placeholder="Password"
              name="password"
              autoComplete="current-password"
            />,
          )}
        </Form.Item>

        <Form.Item className="mb-2">
          <Button
            type="primary"
            htmlType="submit"
            className="form-membership__submit"
            loading={loginWithEmailRequest.loading}>
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
          <button type="button" className="btn btn_transparent" onClick={onLoginWithGoogle}>
            <SocialIcon brand="google" />
          </button>
          <button type="button" className="btn btn_transparent" onClick={onLoginWithGithub}>
            <SocialIcon brand="github" />
          </button>
        </div>

        <Divider />
        <div className="text-center">
          <h4 className="form-membership__sub-title">Don't have an account?</h4>
          <Button onClick={() => props.history.push(ROUTES.SIGN_UP)}>Register now!</Button>
        </div>
      </Form>
    </div>
  );
};

const WrappedSignInForm = Form.create({ name: 'sign_in' })(SignInForm);

export default WrappedSignInForm;

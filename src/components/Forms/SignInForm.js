import React from 'react';
import { Button, Divider, Form, Input } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import SocialIcon from '../SocialIcon';
import * as ROUTES from '../../constants/routes';

const SignInForm = props => {
  const { getFieldDecorator, validateFields } = props.form;

  const onSubmit = event => {
    event.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const onGoToSignUp = () => {
    props.history.push(ROUTES.SIGN_UP);
  };

  return (
    <div className="SignIn">
      <div className="form-membership__wrapper">
        <Form className="form-membership SignIn__form" onSubmit={onSubmit}>
          <div className="form-membership__logo">
            <Icon icon={['far', 'comment-dots']} />
          </div>
          <h2 className="form-membership__title text-center">Sign in</h2>
          <Form.Item className="form-membership__item">
            {getFieldDecorator('email', {
              rules: [
                { type: 'email', message: 'Email is invalid!' },
                { required: true, message: 'Please input your email!' },
              ],
            })(<Input placeholder="Email" name="email" />)}
          </Form.Item>
          <Form.Item className="form-membership__item">
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
                { min: 6, message: 'Password should contain at least 6 characters' },
              ],
            })(<Input.Password type="password" placeholder="Password" name="password" />)}
          </Form.Item>
          <Form.Item className="mb-2">
            <Button type="primary" htmlType="submit" className="form-membership__submit">
              Sign in
            </Button>
          </Form.Item>
          <div className="text-center">
            <a className="form-membership__submit" href="">
              Reset password
            </a>
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
    </div>
  );
};

const WrappedSignInForm = Form.create({ name: 'sign_in' })(SignInForm);

export default WrappedSignInForm;

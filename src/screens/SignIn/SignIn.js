import React from 'react';
import './SignIn.scss';
import { Button, Divider, Form, Input } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import SocialIcon from '../../components/SocialIcon';

const SignIn = props => {
  const { getFieldDecorator } = props.form;
  return (
    <div className="SignIn">
      <div className="form-membership__wrapper">
        <Form className="form-membership SignIn__form">
          <div className="form-membership__logo">
            <Icon icon={['far', 'comment-dots']} />
          </div>
          <h2 className="form-membership__title text-center">Sign in</h2>
          <Form.Item className="form-membership__item">
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(<Input placeholder="Email" />)}
          </Form.Item>
          <Form.Item className="form-membership__item">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(<Input type="password" placeholder="Password" />)}
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
            <Button>Register now!</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

const WrappedSignInForm = Form.create({ name: 'normal_login' })(SignIn);

export default WrappedSignInForm;

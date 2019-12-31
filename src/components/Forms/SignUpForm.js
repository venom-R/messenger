import React from 'react';
import { Button, Divider, Form, Input } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import * as ROUTES from '../../constants/routes';

const SignUpForm = props => {
  const { getFieldDecorator, validateFields } = props.form;

  const onSubmit = event => {
    event.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const onGoToSignIn = () => {
    props.history.push(ROUTES.SIGN_IN);
  };

  return (
    <div className="SignIn">
      <div className="form-membership__wrapper">
        <Form className="form-membership SignIn__form" onSubmit={onSubmit}>
          <div className="form-membership__logo">
            <Icon icon={['far', 'comment-dots']} />
          </div>
          <h2 className="form-membership__title text-center">Create account</h2>

          <Form.Item className="form-membership__item">
            {getFieldDecorator('firstname', {
              rules: [{ required: true, message: 'Please input your first name!' }],
            })(<Input placeholder="First name" name="firstname" />)}
          </Form.Item>

          <Form.Item className="form-membership__item">
            {getFieldDecorator('lastname', {
              rules: [{ required: true, message: 'Please input your last name!' }],
            })(<Input placeholder="Last name" name="lastname" />)}
          </Form.Item>

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
              Register
            </Button>
          </Form.Item>

          <Divider />
          <div className="text-center">
            <h4 className="form-membership__sub-title">Already have an account?</h4>
            <Button onClick={onGoToSignIn}>Sign in!</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

const WrappedSignUpForm = Form.create({ name: 'sign_up' })(SignUpForm);

export default WrappedSignUpForm;

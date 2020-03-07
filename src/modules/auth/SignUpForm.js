import React from 'react';
import { Button, Divider, Form, Input } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import * as ROUTES from '../../constants/routes';
import Auth from '../../firebase/Auth';
import { VALIDATION_RULES } from '../../constants/validationsRules';

const SignUpForm = props => {
  const { getFieldDecorator, validateFields } = props.form;

  const onSubmit = event => {
    event.preventDefault();
    validateFields((err, values) => {
      const { firstName, lastName, email, password } = values;
      if (!err) {
        console.log('Received values of form: ', values);
        Auth.createUser(firstName, lastName, email, password)
          .then(() => {
            props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            console.error(error);
          });
      }
    });
  };

  const onGoToSignIn = () => {
    props.history.push(ROUTES.SIGN_IN);
  };

  return (
    <div className="form-membership">
      <Form className="form-membership__inner SignIn__form" onSubmit={onSubmit}>
        <div className="form-membership__logo">
          <Icon icon={['far', 'comment-dots']} />
        </div>
        <h2 className="form-membership__title text-center">Create account</h2>

        <Form.Item className="form-membership__item">
          {getFieldDecorator('firstName', {
            rules: VALIDATION_RULES.firstName,
          })(<Input placeholder="First name" name="firstName" />)}
        </Form.Item>

        <Form.Item className="form-membership__item">
          {getFieldDecorator('lastName', {
            rules: VALIDATION_RULES.lastName,
          })(<Input placeholder="Last name" name="lastName" />)}
        </Form.Item>

        <Form.Item className="form-membership__item">
          {getFieldDecorator('email', {
            rules: VALIDATION_RULES.email,
          })(<Input placeholder="Email" name="email" />)}
        </Form.Item>

        <Form.Item className="form-membership__item">
          {getFieldDecorator('password', {
            rules: VALIDATION_RULES.password,
          })(
            <Input.Password
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="on"
            />,
          )}
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
  );
};

const WrappedSignUpForm = Form.create({ name: 'sign_up' })(SignUpForm);

export default WrappedSignUpForm;

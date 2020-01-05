import React from 'react';
import { Button, Form, Input, Tabs } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import './EditProfileForm.scss';
import SocialIcon from '../../SocialIcon';

const { TabPane } = Tabs;
const { TextArea } = Input;

const EditProfileForm = props => {
  const { getFieldDecorator, validateFields } = props.form;

  const onSubmit = event => {
    event.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <Form onSubmit={onSubmit} layout="vertical">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Personal" key="1" className="EditProfileForm__tab-item">
          <Form.Item label="First name" className="EditProfileForm__form-item">
            <Input addonAfter={<Icon icon={['fas', 'user']} />} name="firstname" />
          </Form.Item>

          <Form.Item label="Last name" className="EditProfileForm__form-item">
            <Input addonAfter={<Icon icon={['fas', 'user']} />} name="lastname" />
          </Form.Item>

          <Form.Item label="Country" className="EditProfileForm__form-item">
            <Input
              addonAfter={<Icon icon={['fas', 'globe-europe']} />}
              placeholder="Ex: Ukraine"
              name="country"
            />
          </Form.Item>

          <Form.Item label="City" className="EditProfileForm__form-item">
            <Input
              addonAfter={<Icon icon={['fas', 'map-marker-alt']} />}
              placeholder="Ex: Poltava"
              name="city"
            />
          </Form.Item>

          <Form.Item label="Phone" className="EditProfileForm__form-item">
            <Input
              addonAfter={<Icon icon={['fas', 'phone']} />}
              placeholder="+38 (099) 999 99 99"
              name="phone"
            />
          </Form.Item>

          <Form.Item label="Website" className="EditProfileForm__form-item">
            <Input
              addonAfter={<Icon icon={['fas', 'globe']} />}
              placeholder="https://"
              name="website"
            />
          </Form.Item>
        </TabPane>

        <TabPane tab="About" key="2" className="EditProfileForm__tab-item">
          <Form.Item
            label="Write a few words that describe you"
            className="EditProfileForm__form-item">
            {getFieldDecorator('description', {
              rules: [{ max: 120, message: 'Description should contain up to 120 characters!' }],
            })(<TextArea rows={3} name="description" />)}
          </Form.Item>
        </TabPane>

        <TabPane tab="Social Links" key="3" className="EditProfileForm__tab-item">
          <Form.Item className="EditProfileForm__form-item EditProfileForm__social-item">
            <Input
              addonAfter={<SocialIcon round={false} brand="facebook" xs={true} />}
              placeholder="Username"
              name="usernameFacebook"
            />
          </Form.Item>

          <Form.Item className="EditProfileForm__form-item EditProfileForm__social-item">
            <Input
              addonAfter={<SocialIcon round={false} brand="twitter" xs={true} />}
              placeholder="Username"
              name="usernameFacebook"
            />
          </Form.Item>

          <Form.Item className="EditProfileForm__form-item EditProfileForm__social-item">
            <Input
              addonAfter={<SocialIcon round={false} brand="dribbble" xs={true} />}
              placeholder="Username"
              name="usernameFacebook"
            />
          </Form.Item>

          <Form.Item className="EditProfileForm__form-item EditProfileForm__social-item">
            <Input
              addonAfter={<SocialIcon round={false} brand="linkedin" xs={true} />}
              placeholder="Username"
              name="usernameFacebook"
            />
          </Form.Item>

          <Form.Item className="EditProfileForm__form-item EditProfileForm__social-item">
            <Input
              addonAfter={<SocialIcon round={false} brand="instagram" xs={true} />}
              placeholder="Username"
              name="usernameFacebook"
            />
          </Form.Item>

          <Form.Item className="EditProfileForm__form-item EditProfileForm__social-item">
            <Input
              addonAfter={<SocialIcon round={false} brand="github" xs={true} />}
              placeholder="Username"
              name="usernameFacebook"
            />
          </Form.Item>
        </TabPane>
      </Tabs>

      <Form.Item className="text-right mb-0">
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedEditProfileForm = Form.create({ name: 'edit_profile_form' })(EditProfileForm);

export default WrappedEditProfileForm;

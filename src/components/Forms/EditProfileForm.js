import React from 'react';
import { Button, Form, Input, Tabs } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const { TabPane } = Tabs;

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
        <TabPane tab="Personal" key="1">
          <Form.Item label="First name">
            <Input
              addonAfter={<Icon icon={['far', 'user']} />}
              placeholder="First name"
              name="firstname"
            />
          </Form.Item>

          <Form.Item label="Country">
            <Input
              addonAfter={<Icon icon={['fas', 'globe-europe']} />}
              placeholder="Ex: Ukraine"
              name="country"
            />
          </Form.Item>

          <Form.Item label="City">
            <Input
              addonAfter={<Icon icon={['fas', 'map-marker-alt']} />}
              placeholder="Ex: Poltava"
              name="city"
            />
          </Form.Item>

          <Form.Item label="Phone">
            <Input
              addonAfter={<Icon icon={['fas', 'phone']} />}
              placeholder="+38 (099) 999 99 99"
              name="phone"
            />
          </Form.Item>

          <Form.Item label="Website">
            <Input
              addonAfter={<Icon icon={['fas', 'globe']} />}
              placeholder="https://"
              name="website"
            />
          </Form.Item>
        </TabPane>

        <TabPane tab="About" key="2">
          Content of Tab Pane 2
        </TabPane>

        <TabPane tab="Social Links" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>

      <Form.Item className="text-right">
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedEditProfileForm = Form.create({ name: 'edit_profile_form' })(EditProfileForm);

export default WrappedEditProfileForm;

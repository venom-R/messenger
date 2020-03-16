import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';

import { Button, Form, Input, Tabs, message } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import SocialIcon from '../../components/SocialIcon';
import Avatar from '../../components/Avatar';
import AvatarUploader from './AvatarUploader';

import { authUserSelector } from '../auth/authSelectors';
import { updateAuthUserData } from '../auth/authSlice';
import { combineSocialMedia, filterUndefinedFields } from './helpers';
import { useHttpRequest } from '../../hooks';
import DB from '../../firebase/DB';
import { VALIDATION_RULES } from '../../constants/validationsRules';

import './EditProfileForm.scss';

const { TabPane } = Tabs;
const { TextArea } = Input;

const messageKey = 'updateUser';

const EditProfileForm = props => {
  const { getFieldDecorator, validateFields } = props.form;
  const user = useSelector(authUserSelector, shallowEqual);
  const updateUserRequest = useHttpRequest(DB.updateUser);
  const dispatch = useDispatch();

  const updateUser = useCallback(
    async (uid, userData) => {
      try {
        message.loading({ content: 'Saving in progress...', key: messageKey });
        await updateUserRequest.send(uid, userData);
        dispatch(updateAuthUserData());
        message.success({ content: 'Profile has been updated!', key: messageKey });
      } catch (error) {
        console.log(error);
        message.error({ content: error.message, key: messageKey });
      }
    },
    [updateUserRequest, dispatch],
  );

  const onSubmit = async event => {
    event.preventDefault();

    if (updateUserRequest.loading) {
      return;
    }

    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const userDataToUpdate = compose(combineSocialMedia, filterUndefinedFields)(values);
        updateUser(user.uid, userDataToUpdate);
      }
    });
  };

  const onAvatarUploadStateChanged = useCallback(
    async getNextPhotoUrl => {
      try {
        message.loading({ content: 'Photo is uploading...', key: messageKey });
        const nextPhotoUrl = await getNextPhotoUrl();
        await updateUser(user.uid, { photo: nextPhotoUrl });
        message.success({ content: 'Photo has been updated!', key: messageKey });
      } catch (error) {
        message.error({ content: error.message, key: messageKey });
      }
    },
    [updateUser, user.uid],
  );

  return (
    <Form onSubmit={onSubmit} layout="vertical">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Main" key="1" className="EditProfileForm__tab-item">
          <div className="d-flex">
            <div className="EditProfileForm__col70">
              <Form.Item label="First name" className="EditProfileForm__form-item">
                {getFieldDecorator('firstName', {
                  initialValue: user.firstName,
                  rules: VALIDATION_RULES.firstName,
                })(<Input addonAfter={<Icon icon={['fas', 'user']} />} name="firstName" />)}
              </Form.Item>

              <Form.Item label="Last name" className="EditProfileForm__form-item">
                {getFieldDecorator('lastName', {
                  initialValue: user.lastName,
                  rules: VALIDATION_RULES.lastName,
                })(<Input addonAfter={<Icon icon={['fas', 'user']} />} name="lastName" />)}
              </Form.Item>
            </div>

            <div className="EditProfileForm__avatar-uploader">
              <AvatarUploader fileName={user.uid} onStateChanged={onAvatarUploadStateChanged}>
                <Avatar
                  src={user.photo}
                  alt={`${user.firstName} ${user.lastName}`}
                  round={false}
                  size="lg"
                />
              </AvatarUploader>
            </div>
          </div>
        </TabPane>

        <TabPane tab="Details" key="2" className="EditProfileForm__tab-item">
          <Form.Item label="Country" className="EditProfileForm__form-item">
            {getFieldDecorator('country', {
              initialValue: user.country,
              rules: VALIDATION_RULES.country,
            })(
              <Input
                addonAfter={<Icon icon={['fas', 'globe-europe']} />}
                placeholder="Ex: Ukraine"
                name="country"
              />,
            )}
          </Form.Item>

          <Form.Item label="City" className="EditProfileForm__form-item">
            {getFieldDecorator('city', {
              initialValue: user.city,
              rules: VALIDATION_RULES.city,
            })(
              <Input
                addonAfter={<Icon icon={['fas', 'map-marker-alt']} />}
                placeholder="Ex: Poltava"
                name="city"
              />,
            )}
          </Form.Item>

          <Form.Item label="Phone" className="EditProfileForm__form-item">
            {getFieldDecorator('phoneNumber', {
              initialValue: user.phoneNumber,
            })(
              <Input
                addonAfter={<Icon icon={['fas', 'phone']} />}
                placeholder="+38 (099) 999 99 99"
                name="phoneNumber"
              />,
            )}
          </Form.Item>

          <Form.Item label="Website" className="EditProfileForm__form-item">
            {getFieldDecorator('website', {
              initialValue: user.website,
            })(
              <Input
                addonAfter={<Icon icon={['fas', 'globe']} />}
                placeholder="https://"
                name="website"
              />,
            )}
          </Form.Item>
        </TabPane>

        <TabPane tab="About" key="3" className="EditProfileForm__tab-item">
          <Form.Item
            label="Write a few words that describe you"
            className="EditProfileForm__form-item">
            {getFieldDecorator('description', {
              initialValue: user.description,
              rules: VALIDATION_RULES.description,
            })(<TextArea rows={3} name="description" />)}
          </Form.Item>
        </TabPane>

        <TabPane tab="Social Links" key="4" className="EditProfileForm__tab-item">
          <Form.Item className="EditProfileForm__form-item EditProfileForm__social-item">
            {getFieldDecorator('facebook', {
              initialValue: user.socialMedia.facebook,
            })(
              <Input
                addonAfter={<SocialIcon round={false} brand="facebook" xs={true} />}
                placeholder="Username"
                name="facebook"
              />,
            )}
          </Form.Item>

          <Form.Item className="EditProfileForm__form-item EditProfileForm__social-item">
            {getFieldDecorator('twitter', {
              initialValue: user.socialMedia.twitter,
            })(
              <Input
                addonAfter={<SocialIcon round={false} brand="twitter" xs={true} />}
                placeholder="Username"
                name="twitter"
              />,
            )}
          </Form.Item>

          <Form.Item className="EditProfileForm__form-item EditProfileForm__social-item">
            {getFieldDecorator('dribbble', {
              initialValue: user.socialMedia.dribbble,
            })(
              <Input
                addonAfter={<SocialIcon round={false} brand="dribbble" xs={true} />}
                placeholder="Username"
                name="dribbble"
              />,
            )}
          </Form.Item>

          <Form.Item className="EditProfileForm__form-item EditProfileForm__social-item">
            {getFieldDecorator('linkedin', {
              initialValue: user.socialMedia.linkedin,
            })(
              <Input
                addonAfter={<SocialIcon round={false} brand="linkedin" xs={true} />}
                placeholder="Username"
                name="linkedin"
              />,
            )}
          </Form.Item>

          <Form.Item className="EditProfileForm__form-item EditProfileForm__social-item">
            {getFieldDecorator('instagram', {
              initialValue: user.socialMedia.instagram,
            })(
              <Input
                addonAfter={<SocialIcon round={false} brand="instagram" xs={true} />}
                placeholder="Username"
                name="instagram"
              />,
            )}
          </Form.Item>

          <Form.Item className="EditProfileForm__form-item EditProfileForm__social-item">
            {getFieldDecorator('github', {
              initialValue: user.socialMedia.github,
            })(
              <Input
                addonAfter={<SocialIcon round={false} brand="github" xs={true} />}
                placeholder="Username"
                name="github"
              />,
            )}
          </Form.Item>
        </TabPane>
      </Tabs>

      <Form.Item className="text-right mb-0">
        <Button type="primary" htmlType="submit" loading={updateUserRequest.loading}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedEditProfileForm = Form.create({ name: 'edit_profile_form' })(EditProfileForm);

export default WrappedEditProfileForm;

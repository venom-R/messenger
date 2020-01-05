import React from 'react';
import { Button, Form, Modal, Tabs } from 'antd';
import EditProfileForm from '../Forms/EditProfileForm/EditProfileForm';

const EditProfileModal = ({ visible, onCancel }) => {
  return (
    <Modal title="Edit Profile" footer={null} visible={visible} onCancel={onCancel}>
      <EditProfileForm />
    </Modal>
  );
};

export default EditProfileModal;

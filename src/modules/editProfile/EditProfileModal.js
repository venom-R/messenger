import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import EditProfileForm from './EditProfileForm';
import { closeEditProfileModal } from './editProfileSlice';

const EditProfileModal = () => {
  const isVisible = useSelector(state => state.editProfile.isModalVisible);
  const dispatch = useDispatch();
  const close = useCallback(() => {
    dispatch(closeEditProfileModal());
  }, [dispatch]);
  return (
    <Modal title="Edit Profile" footer={null} visible={isVisible} onCancel={close}>
      <EditProfileForm />
    </Modal>
  );
};

export default EditProfileModal;

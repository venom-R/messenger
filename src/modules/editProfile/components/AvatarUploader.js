import React from 'react';
import PropTypes from 'prop-types';

import { Upload, message } from 'antd';
import Storage from '../../../firebase/Storage';

import './AvatarUploader.scss';

const metadata = {
  contentType: 'image/jpeg',
};

function beforeUpload(file) {
  const isJpg = file.type === 'image/jpeg';
  if (!isJpg) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpg && isLt2M;
}

const AvatarUploader = ({ fileName, children, onStateChanged = f => f }) => {
  const customRequest = ({ file }) => {
    const name = fileName ? `${fileName}.jpg` : file.name;
    const uploadTask = Storage.avatarsRef.child(name).put(file, metadata);

    const getNextPhotoUrl = new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        function(snapshot) {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        function(error) {
          reject(error);
        },
        function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            resolve(downloadURL);
          });
        },
      );
    });

    onStateChanged(() => getNextPhotoUrl);
  };

  return (
    <Upload
      className="AvatarUploader"
      name="avatar"
      listType="picture-card"
      showUploadList={false}
      customRequest={customRequest}
      beforeUpload={beforeUpload}>
      {children}
    </Upload>
  );
};

AvatarUploader.propTypes = {
  fileName: PropTypes.string,
  onStateChanged: PropTypes.func,
};

export default AvatarUploader;

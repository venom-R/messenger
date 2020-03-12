import React, { useState } from 'react';
import Storage from '../../firebase/Storage';
import { firebase } from '../../firebase/core';
import { Icon, Upload, message, Button } from 'antd';

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

const AvatarLoader = props => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

  const onChange = info => {
    setFile(info.file.originFileObj);
  };

  const onSubmit = event => {
    event.preventDefault();

    const uploadTask = Storage.avatarsRef.child(file.name).put(file, metadata);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        setLoading(true);
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      },
      function(error) {
        console.log(error);
        message.error(error.message);
      },
      function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);
        });
      },
    );
  };

  const uploadButton = (
    <div>
      <span>upload</span>
    </div>
  );

  return (
    <form onSubmit={onSubmit}>
      <Upload
        name="avatar"
        listType="picture-card"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={onChange}>
        {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>

      <Button htmlType="submit">Upload</Button>
    </form>
  );
};

export default AvatarLoader;

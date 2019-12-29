import React from 'react';
import classNames from 'classnames';
import UserCard from '../UserCard';

const MessageItem = ({ data, outgoing }) => {
  const { user, timestamp, content } = data;
  const messageItemClassName = classNames({
    MessageItem: true,
    MessageItem_outgoing: outgoing,
  });
  return (
    <div className={messageItemClassName}>
      <UserCard user={user} timestamp={timestamp} />
      <div className="MessageItem__content">{content}</div>
    </div>
  );
};

export default MessageItem;

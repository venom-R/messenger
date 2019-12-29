import React from 'react';
import MessageList from '../Messages';

const ChatBody = props => {
  return (
    <div className="ChatBody styled-scroll">
      <MessageList/>
    </div>
  );
};

export default ChatBody;

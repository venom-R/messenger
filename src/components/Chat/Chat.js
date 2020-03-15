import React from 'react';
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

import {openProfile} from "../../modules/profile/profileSlice";

import './Chat.scss';

const chatData = {
  partner: {
    uid: '1Cw9AyGqNlW2KIXAkzORWyokelC3',
    fullName: 'Mirabelle Tow',
    avatar: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar5.jpg',
  },
};

const Chat = props => {
  const dispatch = useDispatch();
  const actions = bindActionCreators({openProfile}, dispatch);

  return (
    <div className="Chat">
      <ChatHeader partner={chatData.partner} actions={actions} />
      <ChatBody />
      <ChatFooter />
    </div>
  );
};

export default Chat;

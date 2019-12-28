import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Button, Input, Popover, Tooltip } from 'antd';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const { TextArea } = Input;

const emojiCategories = ['search', 'recent', 'people', 'nature', 'foods', 'activity'];

const EmojiPicker = props => {
  return (
    <Picker
      set="apple"
      include={emojiCategories}
      autofocus={true}
      darkMode={false}
      showPreview={false}
      showSkinTones={false}
      color="#0a80ff"
      onSelect={emoji => console.log(emoji)}
    />
  );
};

const ChatFooter = props => {
  return (
    <footer className="ChatFooter">
      <form>
        <div className="ChatFooter__row">
          <Popover content={<EmojiPicker />} trigger="click">
            <Tooltip placement="top" title="Emoji">
              <Button className="btn btn_secondary mr-3">
                <Icon icon={['far', 'smile']} />
              </Button>
            </Tooltip>
          </Popover>

          <TextArea placeholder="Write a message" autoSize />

          <Tooltip placement="top" title="Add files">
            <Button className="btn btn_secondary mx-3">
              <Icon icon={['fas', 'paperclip']} />
            </Button>
          </Tooltip>

          <Button type="primary" htmlType="submit">
            <Icon icon={['far', 'paper-plane']} />
          </Button>
        </div>
      </form>
    </footer>
  );
};

export default ChatFooter;

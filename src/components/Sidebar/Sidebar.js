import React from 'react';

import { Layout, Row, Col, Button, Tooltip, Input } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import './Sidebar.scss';
import ChatList from '../ChatsList';

const { Header, Content } = Layout;

const SidebarHeader = props => {
  return (
    <Header className="Sidebar__header">
      <Row type="flex" align="middle" justify="space-between" className="Sidebar__row">
        <Col span={8}>
          <h2 className="Sidebar__title">Chats</h2>
        </Col>
        <Col span={8} className="text-right">
          <Tooltip placement="bottom" title="New group">
            <Button className="mr-2">
              <Icon icon={['fas', 'user-friends']} />
            </Button>
          </Tooltip>

          <Tooltip placement="bottom" title="New chat">
            <Button>
              <Icon icon={['fas', 'plus-circle']} />
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Row>
        <Input size="large" placeholder="Search chats" />
      </Row>
    </Header>
  );
};

const Sidebar = props => {
  return (
    <Layout className="Sidebar">
      <SidebarHeader />
      <Content className="Sidebar__content styled-scroll">
        <ChatList />
      </Content>
    </Layout>
  );
};

export default Sidebar;

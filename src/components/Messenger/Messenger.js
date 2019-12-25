import React from 'react';

import { Layout, Row, Col } from 'antd';
import NavigationBar from '../NavigationBar';
import Sidebar from '../Sidebar';

import './Messenger.scss';

const { Content } = Layout;

const Messenger = () => {
  return (
    <div className="Messenger" data-theme="light">
      <Layout className="Messenger__layout">
        <NavigationBar />
        <Content>
          <Row>
            <Col span={8}>
              <Sidebar />
            </Col>
            <Col span={16}>col-12</Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Messenger;

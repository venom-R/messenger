import React from 'react';

import { Layout, Row, Col } from 'antd';
import NavigationBar from '../NavigationBar';

import './Messenger.scss';

const { Content } = Layout;

const Messenger = () => {
  return (
    <div className="Messenger" data-theme="light">
      <Layout style={{ minHeight: '100vh' }}>
        <NavigationBar />
        <Content>
          <Row>
            <Col span={8}>col-12</Col>
            <Col span={16}>col-12</Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Messenger;

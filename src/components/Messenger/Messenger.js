import React from "react";

import { Layout, Row, Col } from "antd";
import NavigationSidebar from "../NavigationSidebar";

import "./Messenger.scss";

const { Content } = Layout;

const Messenger = () => {
  return (
    <div className="Messenger" data-theme="light">
      <Layout style={{ minHeight: "100vh" }}>
        <NavigationSidebar />
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

import React from "react";

import Navigation from "./Navigation";
import { Layout } from "antd";

import "./NavigationBar.scss";

const NavigationBar = props => {
  return (
    <Layout.Sider theme="light" width={100} className="NavigationBar">
      <Navigation />
    </Layout.Sider>
  );
};

export default NavigationBar;

import React from "react";

import Navigation from "./Navigation";
import { Layout } from "antd";

import "./NavigationSidebar.scss";

const NavigationSidebar = props => {
  return (
    <Layout.Sider theme="light" width={100} className="NavigationSidebar">
      <Navigation />
    </Layout.Sider>
  );
};

export default NavigationSidebar;

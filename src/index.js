import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "antd/dist/antd.min.css";
import "./index.scss";
import Messenger from "./components/Messenger";

library.add(fab, far, fas);

ReactDOM.render(<Messenger />, document.getElementById("root"));

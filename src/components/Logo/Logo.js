import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "./Logo.scss";

const Logo = ({ classList = "" }) => {
  return (
    <a href="#" className={"Logo " + classList}>
      <Icon icon={["far", "comment-dots"]} />
    </a>
  );
};

export default Logo;

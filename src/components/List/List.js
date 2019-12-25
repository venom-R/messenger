import React from 'react';
import './ListGroup.scss';

export const ListGroup = ({ className = '', children }) => {
  return <ul className={`ListGroup ${className}`}>{children}</ul>;
};

export const ListGroupItem = ({ className = '', children }) => {
  return <li className={`ListGroupItem ListGroup__item ${className}`}>{children}</li>;
};

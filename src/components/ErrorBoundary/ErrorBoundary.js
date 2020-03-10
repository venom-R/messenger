import React, { Component } from 'react';
import { Icon, Result } from 'antd';
import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="ErrorBoundary">
          <Result
            icon={<Icon type="frown" theme="twoTone" />}
            title="Oops... Something went wrong"
          />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

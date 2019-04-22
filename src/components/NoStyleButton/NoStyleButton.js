import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** NoStyleButton component */
class NoStyleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <button
        type="button"
        css={css`
        cursor: pointer;
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;
        color: inherit;
        font: inherit;
        line-height: normal;
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;
        -webkit-appearance: none;
        text-align: inherit;
        outline: none;
        &::-moz-focus-inner {
            border: 0;
            padding: 0;
        }}
        `}
      >
        {children}
      </button>
    );
  }
}
NoStyleButton.propTypes = {
  children: PropTypes.node
};

NoStyleButton.defaultProps = {
  children: ''
};

export default NoStyleButton;

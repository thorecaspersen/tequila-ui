import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import CodeView from '../../CodeView';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

/** PrintNoteCode component */
class PrintNoteCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, fill } = this.props;
    return (
      <div
        css={css`
          letter-spacing: 0.01rem;
          font-size: 12px;
          margin: ${fill ? '0px auto' : '5px auto'};
          font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          background-color: #f1f1f1;
          border: solid 1px #ccc;
          padding: 10px;
          line-height: 1.7em;
          color: #000;
          box-sizing: ${fill ? 'border-box' : 'border-box'};
          height: ${fill ? '100%' : 'auto'};
          @media print {
            background-color: #fff;
            border: none;
            margin: 0;
          }
        `}
      >
        <pre
          css={css`
            white-space: pre-wrap;
          `}
        >
          {children}
        </pre>
      </div>
    );
  }
}

PrintNoteCode.propTypes = {
  fill: PropTypes.bool,
  children: PropTypes.node
};

PrintNoteCode.defaultProps = {
  fill: false,
  children: ''
};

export default PrintNoteCode;

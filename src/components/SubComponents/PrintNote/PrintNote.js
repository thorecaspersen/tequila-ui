import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** PrintNote component */
class PrintNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, bg } = this.props;
    return (
      <div
        css={css`
          background: ${bg};
          color: #fff;
          border-radius: 5px;
          @media print {
            background: #fff;
            color: #000;
            border-radius: 0px;
            border: solid 2px #000;
          }
        `}
      >
        {children}
      </div>
    );
  }
}

PrintNote.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string
};

PrintNote.defaultProps = {
  children: '',
  bg: '#fff'
};

export default PrintNote;

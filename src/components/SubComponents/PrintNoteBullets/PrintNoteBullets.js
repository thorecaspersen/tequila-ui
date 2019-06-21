import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** PrintNoteBullets */
class PrintNoteBullets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, padding, font } = this.props;

    return (
      <p
        css={css`
          padding: ${padding};
          font-family: ${font};
          letter-spacing: 0.01rem;
          font-weight: 100;
          font-style: normal;
          font-size: 1rem;
          line-height: 1.2rem;
          list-style-position: inside;
          p {
            margin 0;
            display: inline;
          }
          ul, ol {
            margin 0 0 20px 20px;
          }
        `}
      >
        {children}
      </p>
    );
  }
}

PrintNoteBullets.propTypes = {
  font: PropTypes.string,
  children: PropTypes.node,
  padding: PropTypes.string
};

PrintNoteBullets.defaultProps = {
  font: 'Arial,sans-serif',
  children: '',
  padding: '10px'
};

export default PrintNoteBullets;

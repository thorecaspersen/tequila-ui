import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** Card component */
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, bg } = this.props;
    return (
      <div
        css={css`
          background-color: ${bg};
          border: solid 1px #d3d3d3;
          padding: 16px;
          margin-bottom: 16px;
        `}
      >
        {children}
      </div>
    );
  }
}

Card.propTypes = {
  /** background-color */
  bg: PropTypes.string,
  children: PropTypes.node
};

Card.defaultProps = {
  bg: '#f4f6f9',
  children: ''
};

export default Card;

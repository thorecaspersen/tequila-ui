import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** Sidemenu for vertical menu */
class Sidemenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, bg } = this.props;

    return (
      <ul
        css={css`
          background-color: ${bg};
          list-style-type: none;
          margin: 0;
          padding: 5px;
          display: inline-flex;
          flex-direction: column;
        `}
      >
        {children}
      </ul>
    );
  }
}

Sidemenu.propTypes = {
  bg: PropTypes.string,
  children: PropTypes.node
};

Sidemenu.defaultProps = {
  bg: '#fff',
  children: ''
};

export default Sidemenu;

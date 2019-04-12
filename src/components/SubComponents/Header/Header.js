import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** Header, layout component */
class Header extends React.Component {
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
          grid-area: Header;
        `}
      >
        {children}
      </div>
    );
  }
}
Header.propTypes = {
  /** background-color */
  bg: PropTypes.string,
  /** height */
  height: PropTypes.string,
  children: PropTypes.node
};

Header.defaultProps = {
  bg: '#fff',
  height: '200px',
  children: ''
};

export default Header;

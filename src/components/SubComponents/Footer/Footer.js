import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** Footer, layout component */
class Footer extends React.Component {
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
          grid-area: Footer;
        `}
      >
        {children}
      </div>
    );
  }
}

Footer.propTypes = {
  /** background-color */
  bg: PropTypes.string,
  /** height */
  height: PropTypes.string,
  children: PropTypes.node
};

Footer.defaultProps = {
  bg: '#fff',
  height: '100px',
  children: ''
};

export default Footer;

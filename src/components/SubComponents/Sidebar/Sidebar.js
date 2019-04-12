import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** Sidebar, layout component */
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, bg, side } = this.props;
    const gridAreaValue = `Sidebar${side}`;
    return (
      <div
        css={css`
          background-color: ${bg};
          grid-area: ${gridAreaValue};
        `}
      >
        {children}
      </div>
    );
  }
}

Sidebar.propTypes = {
  /** background-color */
  bg: PropTypes.string,
  /** width */
  width: PropTypes.string,
  side: PropTypes.string,
  children: PropTypes.node
};

Sidebar.defaultProps = {
  bg: '#fff',
  width: '100px',
  side: 'left',
  children: ''
};

export default Sidebar;

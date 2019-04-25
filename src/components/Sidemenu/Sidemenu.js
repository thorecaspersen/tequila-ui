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
    const { children, bg, width, childMargin } = this.props;

    return (
      <ul
        css={css`
          background-color: ${bg};
          list-style-type: none;
          margin: 0;
          padding: 5px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          max-height: 100%;
          width: ${width};
          & > li {
            margin: ${childMargin};
          }
          & > span {
            margin: ${childMargin};
          }
        `}
      >
        {children}
      </ul>
    );
  }
}

Sidemenu.propTypes = {
  bg: PropTypes.string,
  children: PropTypes.node,
  childMargin: PropTypes.string,
  width: PropTypes.string
};

Sidemenu.defaultProps = {
  bg: '#fff',
  children: '',
  width: 'auto',
  childMargin: 'inherit'
};

export default Sidemenu;

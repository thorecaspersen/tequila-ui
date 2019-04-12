import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** MenuItemGroup for vertical menu */
class MenuItemGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return (
      <span
        css={css`
          flex-grow: 1;
          padding-left: 20px;
          display: inline-flex;
          flex-direction: column;
        `}
      >
        {children}
      </span>
    );
  }
}

MenuItemGroup.propTypes = {
  children: PropTypes.node
};

MenuItemGroup.defaultProps = {
  children: ''
};

export default MenuItemGroup;

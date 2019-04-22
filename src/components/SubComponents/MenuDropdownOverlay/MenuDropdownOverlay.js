import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import NoStyleButton from '../../NoStyleButton';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

/** MenuDropdownOverlay */
class MenuDropdownOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, titel } = this.props;

    return (
      <li
        css={{
          flexGrow: 1,
          '&:hover': {
            div: {
              visibility: 'visible',
              opacity: '1',
              transition: 'visibility 0s, opacity 0s'
            }
          }
        }}
      >
        <NoStyleButton>{titel}</NoStyleButton>
        <div
          css={css`
            position: absolute;
            opacity: 0;
            visibility: hidden;
            transition: visibility 0s, opacity 0s;
            transition-delay: 0.25s;
            width: 100%;
            top: 100%;
            left: 0;
            z-index: 99;
            background-color: #f9f9f9;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            padding: 5px 10px 10px 10px;
            box-sizing: border-box;
            height: 300px;
          `}
        >
          {children}
        </div>
      </li>
    );
  }
}

MenuDropdownOverlay.propTypes = {
  titel: PropTypes.string,
  children: PropTypes.node
};

MenuDropdownOverlay.defaultProps = {
  children: ''
};

export default MenuDropdownOverlay;

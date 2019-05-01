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
          cursor: 'pointer',
          button: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.1em',
            letterSpacing: '0.15rem',
            color: '#a5a3a3'
          },
          '&:hover': {
            button: {
              color: '#000'
            },
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
            transition-delay: 0s;
            width: 100%;
            top: 100%;
            left: 0;
            z-index: 99;
            background-color: #fff;
            padding: 15px 10px 30px 10px;
            box-sizing: border-box;
            height: 300px;
            cursor: default;
            box-shadow: 0 10px 20px 7px #0000002b;
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

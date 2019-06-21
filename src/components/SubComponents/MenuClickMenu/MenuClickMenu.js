import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import NoStyleButton from '../../NoStyleButton';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

/** MenuClickMenu */
class MenuClickMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, titel, onClick, openMenu } = this.props;
    // const { openMenu } = this.state;
    // console.log(openMenu);

    return (
      <li
        onClick={onClick}
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
            }
          }
        }}
      >
        <NoStyleButton>{titel}</NoStyleButton>

        {openMenu && (
          <div
            css={css`
              position: absolute;
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
        )}
      </li>
    );
  }
}

MenuClickMenu.propTypes = {
  titel: PropTypes.string,
  children: PropTypes.node
};

MenuClickMenu.defaultProps = {
  children: ''
};

export default MenuClickMenu;

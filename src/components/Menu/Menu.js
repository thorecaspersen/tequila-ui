import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** Menu for horizontal menu!!! */
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, bg } = this.props;

    return (
      <nav
        css={css`
          display: flex;
          justify-content: right;
        `}
      >
        <ul
          css={css`
            background-color: ${bg};
            list-style-type: none;
            display: flex;
            padding 0px;
            & li {
              padding: 1rem 2rem;
            }
          `}
        >
          {children}
        </ul>
      </nav>
    );
  }
}

Menu.propTypes = {
  bg: PropTypes.string,
  children: PropTypes.node
};

Menu.defaultProps = {
  bg: '#fff',
  children: ''
};

export default Menu;

import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** MenuItem */
class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, titel, link } = this.props;

    return (
      <li
        css={css`
          flex-grow: 1;
        `}
      >
        {titel || false ? (
          <a
            href={link}
            css={css`
              text-decoration: none;
              color: #a5a3a3;
              font-family: Arial, sans-serif;
              font-size: 1em;
              letter-spacing: 0.15rem;
              line-height: 1.2em;
              color: #a5a3a3;
              &:hover {
                color: #000;
              }
            `}
          >
            {titel}
          </a>
        ) : (
          children
        )}
      </li>
    );
  }
}

MenuItem.propTypes = {
  titel: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.node
};

MenuItem.defaultProps = {
  link: '#',
  children: ''
};

export default MenuItem;

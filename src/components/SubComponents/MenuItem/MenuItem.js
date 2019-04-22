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

import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** MenuHeadline */
class MenuHeadline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, titel, link, paddingTop } = this.props;

    return (
      <li
        css={css`
          padding-top: ${paddingTop};
          flex-grow: 1;
          font-size: 15px;
          font-weight: 900;
        `}
      >
        {titel || false ? <a href={link}>{titel}</a> : children}
      </li>
    );
  }
}

MenuHeadline.propTypes = {
  titel: PropTypes.string,
  children: PropTypes.node,
  paddingTop: PropTypes.string
};

MenuHeadline.defaultProps = {
  children: '',
  paddingTop: '0px'
};

export default MenuHeadline;

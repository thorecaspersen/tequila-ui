import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** Content, layout component */
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, bg } = this.props;
    return (
      <div
        css={css`
          background-color: ${bg};
          grid-area: Content;
        `}
      >
        {children}
      </div>
    );
  }
}

Content.propTypes = {
  /** background-color */
  bg: PropTypes.string,
  children: PropTypes.node
};

Content.defaultProps = {
  bg: '#fff',
  children: ''
};

export default Content;

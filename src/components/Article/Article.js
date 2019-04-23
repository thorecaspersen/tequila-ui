import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** Article component */
class Article extends React.Component {
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
          border: solid 1px #d3d3d3;
          width: 100%;
          padding: 0 0 100px 0;
          color: #666666;
        `}
      >
        {children}
      </div>
    );
  }
}

Article.propTypes = {
  /** background-color */
  bg: PropTypes.string,
  children: PropTypes.node
};

Article.defaultProps = {
  bg: '#fff',
  children: ''
};

export default Article;

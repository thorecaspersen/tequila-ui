import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

/** ArticleSplitContent component */
class ArticleSplitContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, marginTop } = this.props;
    return (
      <div
        css={css`
          width: 100%;
          display: flex;
          padding: 0px;
          box-sizing: border-box;
          margin-top: ${marginTop};
        `}
      >
        {children}
      </div>
    );
  }
}

ArticleSplitContent.propTypes = {
  marginTop: PropTypes.string,
  children: PropTypes.node
};

ArticleSplitContent.defaultProps = {
  marginTop: '50px',
  children: ''
};

export default ArticleSplitContent;

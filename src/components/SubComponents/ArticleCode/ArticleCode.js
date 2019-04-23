import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import CodeView from '../../CodeView';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

/** ArticleCode component */
class ArticleCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, marginTop } = this.props;
    return (
      <div
        css={css`
          letter-spacing: 0.01rem;
          font-size: 15px;
          max-width: 900px;
          margin: ${marginTop} auto 0 auto;
        `}
      >
        <CodeView>{children}</CodeView>
      </div>
    );
  }
}

ArticleCode.propTypes = {
  font: PropTypes.string,
  marginTop: PropTypes.string,
  children: PropTypes.node
};

ArticleCode.defaultProps = {
  marginTop: '50px',
  children: ''
};

export default ArticleCode;

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
    const { children, marginTop, language } = this.props;
    // the markdown to react compoent give the code in a array. that is small parts of the code block.
    // so this is for joining it all to one string
    let code = children;
    let lang = language;

    if (children.props && children.props.children && children.props.className) {
      if (Array.isArray(children.props.children)) {
        code = children.props.children.join('');
      } else {
        code = children.props.children;
      }

      if (children.props.className) {
        lang = children.props.className;
      }
    }

    return (
      <div
        css={css`
          letter-spacing: 0.01rem;
          font-size: 15px;
          max-width: 900px;
          margin: ${marginTop} auto 0 auto;
        `}
      >
        <CodeView language={lang}>{code}</CodeView>
      </div>
    );
  }
}

ArticleCode.propTypes = {
  font: PropTypes.string,
  marginTop: PropTypes.string,
  language: PropTypes.string,
  children: PropTypes.node
};

ArticleCode.defaultProps = {
  marginTop: '50px',
  language: 'language-js',
  children: ''
};

export default ArticleCode;

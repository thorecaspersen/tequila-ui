import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** ArticleQuote component */
class ArticleQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, font, marginTop } = this.props;
    return (
      <blockquote
        css={css`
          font-family: ${font};
          font-weight: 400;
          font-style: italic;
          font-size: 30px;
          line-height: 1.4em;
          max-width: 600px;
          margin: ${marginTop} auto 0 auto;
          color: #5d5c5c;
          p {
            font-family: ${font};
            font-weight: 400;
            font-style: italic;
            font-size: 30px;
            line-height: 1.4em;
            max-width: 600px;
            margin: ${marginTop} auto 0 auto;
            color: #5d5c5c;
          }
        `}
      >
        {children}
      </blockquote>
    );
  }
}

ArticleQuote.propTypes = {
  font: PropTypes.string,
  marginTop: PropTypes.string,
  children: PropTypes.node
};

ArticleQuote.defaultProps = {
  font: 'Georgia,Cambria,"Times New Roman",Times,serif',
  marginTop: '50px',
  children: ''
};

export default ArticleQuote;

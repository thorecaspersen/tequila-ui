import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** ArticleSubHeadline component */
class ArticleSubHeadline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { titel, font, marginTop, children } = this.props;
    return (
      <h2
        css={css`
          font-family: ${font};
          max-width: 740px;
          font-weight: 900;
          line-height: 1.25;
          font-size: 1.8em;
          margin: ${marginTop} auto 0 auto;
          padding-bottom: 0.3em;
          border-bottom: 1px solid #eaecef;
        `}
      >
        {titel || children}
      </h2>
    );
  }
}

ArticleSubHeadline.propTypes = {
  titel: PropTypes.string,
  font: PropTypes.string,
  marginTop: PropTypes.string,
  children: PropTypes.node
};

ArticleSubHeadline.defaultProps = {
  font: 'Arial,sans-serif',
  marginTop: '40px',
  children: ''
};

export default ArticleSubHeadline;

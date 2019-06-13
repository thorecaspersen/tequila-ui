import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** ArticleSummary component */
class ArticleSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { font, marginTop, children, summary } = this.props;
    return (
      <details
        css={css`
          font-family: ${font};
          max-width: 740px;
          margin: ${marginTop} auto 0 auto;
          letter-spacing: 0.01rem;
          font-weight: 400;
          font-size: 20px;
          line-height: 1.58em;
          summary {
            font-weight: 900;
            line-height: 1.25;
            font-size: 1.1em;
          }
        `}
      >
        {summary ? (
          <>
            <summary>{summary}</summary>
            {children}
          </>
        ) : (
          children
        )}
      </details>
    );
  }
}

ArticleSummary.propTypes = {
  font: PropTypes.string,
  marginTop: PropTypes.string,
  children: PropTypes.node,
  summary: PropTypes.string
};

ArticleSummary.defaultProps = {
  font: 'Arial,sans-serif',
  marginTop: '50px',
  children: ''
};

export default ArticleSummary;

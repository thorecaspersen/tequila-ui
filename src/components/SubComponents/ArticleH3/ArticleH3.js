import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** ArticleH3 component */
class ArticleH3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { titel, font, marginTop, children } = this.props;
    return (
      <h1
        css={css`
          font-family: ${font};
          max-width: 740px;
          font-weight: 900;
          line-height: 1.25;
          font-size: 1.4em;
          margin: ${marginTop} auto 0 auto;
        `}
      >
        {titel || children}
      </h1>
    );
  }
}

ArticleH3.propTypes = {
  titel: PropTypes.string,
  font: PropTypes.string,
  marginTop: PropTypes.string,
  children: PropTypes.node
};

ArticleH3.defaultProps = {
  font: 'Arial,sans-serif',
  marginTop: '50px',
  children: ''
};

export default ArticleH3;

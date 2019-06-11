import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** ArticleOrderedList component */
class ArticleOrderedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, font, marginTop } = this.props;
    return (
      <ol
        css={css`
          font-family: ${font};
          letter-spacing: 0.01rem;
          font-weight: 400;
          font-style: normal;
          font-size: 20px;
          line-height: 1.58em;
          max-width: 740px;
          margin: ${marginTop} auto 0 auto;
          color: #4a4949;
          list-style-position: inside;
        `}
      >
        {children}
      </ol>
    );
  }
}

ArticleOrderedList.propTypes = {
  font: PropTypes.string,
  marginTop: PropTypes.string,
  children: PropTypes.node
};

ArticleOrderedList.defaultProps = {
  font: 'Arial,sans-serif',
  marginTop: '50px',
  children: ''
};

export default ArticleOrderedList;

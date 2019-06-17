import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** ArticleTable component */
class ArticleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, font } = this.props;
    return (
      <table
        css={css`
          font-family: ${font};
          overflow: auto;
          display: block;
          border-spacing: 0;
          border-collapse: collapse;
          margin: 15px auto;
          max-width: 740px;
          font-size: 18px;
          thead th {
            font-weight: bold;
          }
          tr {
            border-top: 1px solid #ccc;
            background-color: #fff;
          }
          tbody tr:nth-of-type(2n) {
            background-color: #f8f8f8;
          }
          td,
          th {
            border: 1px solid #ddd;
            padding: 6px 13px;
          }
        `}
      >
        {children}
      </table>
    );
  }
}

ArticleTable.propTypes = {
  titel: PropTypes.string,
  font: PropTypes.string,
  children: PropTypes.node
};

ArticleTable.defaultProps = {
  font: 'Arial,sans-serif',
  children: ''
};

export default ArticleTable;

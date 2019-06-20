import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** PrintNoteHeadline */
class PrintNoteHeadline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { titel, children } = this.props;

    return (
      <h5
        css={css`
          font-size: 20px;
          font-weight: 900;
          margin-bottom: 5px;
          margin-top: 10px;
          line-height: 1.2em;
          text-align: center;
          @media print {
            margin-bottom: 0px;
          }
        `}
      >
        {titel || children}
      </h5>
    );
  }
}

PrintNoteHeadline.propTypes = {
  titel: PropTypes.string,
  children: PropTypes.node
};

PrintNoteHeadline.defaultProps = { children: '' };

export default PrintNoteHeadline;

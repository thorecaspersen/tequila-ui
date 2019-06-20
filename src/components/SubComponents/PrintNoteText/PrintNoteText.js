import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** PrintNoteText */
class PrintNoteText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return (
      <p
        css={css`
          padding: 10px;
        `}
      >
        {children}
      </p>
    );
  }
}

PrintNoteText.propTypes = {
  children: PropTypes.node
};

PrintNoteText.defaultProps = {};

export default PrintNoteText;

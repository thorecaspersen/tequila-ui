import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const style = css`
  color: hotpink;
`;
// import PropTypes from 'prop-types';

/** EmotionTest */
class EmotionTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div css={style}>
        <p>hello emotion!</p>
      </div>
    );
  }
}
EmotionTest.propTypes = {};

EmotionTest.defaultProps = {};

export default EmotionTest;

import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** AnchorLink component */
class AnchorLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { link } = this.props;
    return <span id={link} />;
  }
}

AnchorLink.propTypes = {
  link: PropTypes.string
};

AnchorLink.defaultProps = {
  link: ''
};

export default AnchorLink;

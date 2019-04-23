import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

/** ArticleImage component */
class ArticleImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { marginTop, src, allign } = this.props;

    return (
      <div
        css={css`
          text-align: center;
          margin-top: ${marginTop};
        `}
      >
        <img
          src={src}
          alt=""
          css={css`
            width: ${allign === 'center' ? 'inherit' : '100%'};
          `}
        />
      </div>
    );
  }
}

ArticleImage.propTypes = {
  allign: PropTypes.string,
  src: PropTypes.string,
  marginTop: PropTypes.string
};

ArticleImage.defaultProps = {
  src: '',
  allign: 'center',
  marginTop: '50px'
};

export default ArticleImage;

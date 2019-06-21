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
    const { marginTop, src, alt, allign, children } = this.props;
    // const img = children.querySelector('.flex-figure img');
    // console.log(children.props.children.props);
    let imgSrc = src;
    let imgAlt = alt;
    if (
      children !== '' &&
      children.props &&
      children.props.children &&
      children.props.children.length > 0
    ) {
      // console.log('children.props.children.props');
      children.props.children.forEach(value => {
        if (value.type === 'img') {
          imgSrc = value.props.src;
          imgAlt = value.props.alt;
        }
      });
    } else if (
      children !== '' &&
      children.props &&
      children.props.children &&
      children.props.children.type &&
      children.props.children.type === 'img' &&
      children.props.children.props.src &&
      children.props.children.props.alt
    ) {
      // if the children only have a img. Then its not a array but obj.
      imgSrc = children.props.children.props.src;
      imgAlt = children.props.children.props.alt;
    }
    return (
      <div
        css={css`
          text-align: center;
          margin-top: ${marginTop};
        `}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
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
  alt: PropTypes.string,
  marginTop: PropTypes.string,
  children: PropTypes.node
};

ArticleImage.defaultProps = {
  src: '',
  alt: '',
  allign: 'center',
  marginTop: '50px',
  children: ''
};

export default ArticleImage;

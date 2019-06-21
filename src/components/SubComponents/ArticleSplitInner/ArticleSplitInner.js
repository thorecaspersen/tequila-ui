import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import CodeView from '../../CodeView';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

// God dammit CSS
// https://stackoverflow.com/questions/11126685/why-does-container-div-insist-on-being-slightly-larger-than-img-or-svg-content

/** ArticleSplitInner component */
class ArticleSplitInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, content, src, type } = this.props;
    const style = [];
    style.output = css`
      flex: 50%;
      background-color: #fdf6e3;
    `;
    style.image = css`
      flex: 50%;
    `;
    style.code = css`
      flex: 50%;
      & > pre {
        border-radius: 0;
        margin: 0;
        height: 100%;
        box-sizing: border-box;
      }
    `;

    return (
      <div css={style[content]}>
        {content === 'output' && (
          <div
            css={css`
              padding: 10px;
              height: 100%;
              box-sizing: border-box;
            `}
          >
            <p
              css={css`
                font-weight: 700;
                color: #939393;
              `}
            >
              Output:
            </p>
            {children}
          </div>
        )}
        {content === 'code' && <CodeView language={type}>{children}</CodeView>}
        {content === 'image' && (
          <img
            src={src}
            alt=""
            css={css`
              width: 100%;
              display: block;
            `}
          />
        )}
      </div>
    );
  }
}

ArticleSplitInner.propTypes = {
  content: PropTypes.string,
  src: PropTypes.string,
  marginTop: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node
};

ArticleSplitInner.defaultProps = {
  content: 'output',
  src: '',
  marginTop: '50px',
  type: 'language-js',
  children: ''
};

export default ArticleSplitInner;

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import ArticleSplitInner from 'tequila-ui/SubComponents/ArticleSplitInner';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

/** ArticleSplitContent component */
class ArticleSplitContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.markdownReactHandler = this.markdownReactHandler.bind(this);
  }

  // special handler for markdown to react content
  // it will have this form:
  //   <ArticleSplitContent>
  //   <ArticleCode>
  //     <code className="language-output">first output message{'\n'}</code>
  //   </ArticleCode>
  //   <ArticleCode>
  //     <code className="language-output">second output message{'\n'}</code>
  //   </ArticleCode>
  // </ArticleSplitContent>
  markdownReactHandler(content, type) {
    this.type = type;
    switch (this.type) {
      case 'language-output':
        return (
          <ArticleSplitInner content="output">{content}</ArticleSplitInner>
        );
      case 'img':
        return <ArticleSplitInner src={content} content="image" />;
      default:
        return (
          <ArticleSplitInner content="code" type={type}>
            {content}
          </ArticleSplitInner>
        );
    }
  }

  render() {
    const { children, marginTop } = this.props;
    let { useMdContent } = this.props;

    // if the component is used normal way, then just use the children content.
    // if the childre content is comming from a markdown tranformer, then it need special treatment.

    // MARKDOWN CONTENT
    // format children, if it comes from markdown tranformer
    // output & code is wrapped in an <ArticleCode>
    let rightContent;
    let leftContent;
    const content = []; // 0: first ArticleSplitInners content, 1 the second ArticleSplitInners content
    const contentType = [];
    if (
      Array.isArray(children) &&
      children[0].type &&
      children[1].type &&
      children[0].type.displayName &&
      children[1].type.displayName &&
      (children[0].type.displayName === 'ArticleCode' ||
        children[0].props.children.type === 'img') &&
      (children[1].type.displayName === 'ArticleCode' ||
        children[1].props.children.type === 'img')
    ) {
      useMdContent = true; // the flag, that trickers that its gonna be this crazy content handling.

      // GET CONTENT
      children.forEach(value => {
        // this is for img

        if (value.props.children.type === 'img') {
          content.push(value.props.children.props.src); // content
          contentType.push(value.props.children.type); // type
        } else if (Array.isArray(value.props.children.props.children)) {
          // this is for code or output
          // if the content is just one line, then it is just a string, else i a array of content that is spilt up.
          content.push(value.props.children.props.children.join('')); // content
          contentType.push(value.props.children.props.className); // type
        } else {
          content.push(value.props.children.props.children); // content
          contentType.push(value.props.children.props.className); // type
        }
      });

      // children[0].props.children.props.className: is
      // either language-output or language-XX: then it is a code block
      rightContent = this.markdownReactHandler(
        content[0], // content
        contentType[0] // type
      );
      leftContent = this.markdownReactHandler(content[1], contentType[1]);
    }

    return (
      <div
        css={css`
          width: 100%;
          display: flex;
          padding: 0px;
          box-sizing: border-box;
          margin-top: ${marginTop};
        `}
      >
        {useMdContent ? rightContent : children}
        {useMdContent && leftContent}
      </div>
    );
  }
}

ArticleSplitContent.propTypes = {
  marginTop: PropTypes.string,
  children: PropTypes.node,
  useMdContent: PropTypes.bool
};

ArticleSplitContent.defaultProps = {
  marginTop: '50px',
  children: '',
  useMdContent: false
};

export default ArticleSplitContent;

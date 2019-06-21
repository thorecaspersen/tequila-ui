import React from 'react';
import PropTypes from 'prop-types';

import Prism from 'prismjs';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

Prism.highlightAll();

/** PrintNoteCode component */
class PrintNoteCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { children, language, fill } = this.props;
    // the markdown to react compoent give the code in a array. that is small parts of the code block.
    // so this is for joining it all to one string
    let code = children;
    let lang = language;

    if (children.props && children.props.children && children.props.className) {
      // if the content is just one line, then it is just a string, else i a array of content that is spilt up.
      if (Array.isArray(children.props.children)) {
        code = children.props.children.join('');
      } else {
        code = children.props.children;
      }

      if (children.props.className) {
        lang = children.props.className;
      }
    }
    // @media print style is disabling the PrismJs highlight style. because black is better on paper.
    return (
      <div
        css={css`
          letter-spacing: 0.03rem;
          font-size: 12px;
          margin: ${fill ? '0px auto' : '5px auto'};
          background-color: #272822;
          line-height: 1.7em;
          box-sizing: ${fill ? 'border-box' : 'border-box'};
          height: ${fill ? '100%' : 'auto'};
          & > pre {
            border-radius: 0;
            margin: 0;
            height: 100%;
            box-sizing: border-box;
          }
          @media print {
            background-color: #fff;
            border: none;
            margin: 0;
            pre code span.token {
              color: #000 !important;
              text-shadow: 0 0px rgba(0, 0, 0, 0.3);
            }
            pre code {
              color: #000 !important;
              text-shadow: 0 0px rgba(0, 0, 0, 0.3);
            }
            pre code span {
              color: #000 !important;
              text-shadow: 0 0px rgba(0, 0, 0, 0.3);
            }
            & > pre {
              background-color: #fff;
              color: #000 !important;
              border: solid 1px #ccc;
            }
          }
        `}
      >
        <pre
          ref={ref => {
            this.element = ref;
          }}
        >
          <code
            css={css`
              font-family: 'Andale Mono', 'Ubuntu Mono', monospace;
            `}
            className={lang}
          >
            {code}
          </code>
        </pre>
      </div>
    );
  }
}

PrintNoteCode.propTypes = {
  fill: PropTypes.bool,
  children: PropTypes.node,
  language: PropTypes.string
};

PrintNoteCode.defaultProps = {
  fill: false,
  language: 'language-js',
  children: ''
};

export default PrintNoteCode;

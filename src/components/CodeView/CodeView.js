import React from 'react';
import PropTypes from 'prop-types';

import Prism from 'prismjs';

// import 'prismjs/components/prism-jsx';
// import 'prismjs/themes/prism-okaidia.css';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

Prism.highlightAll();

/** CodeView */
class CodeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { children, language } = this.props;
    return (
      <pre
        className="line-numbers"
        ref={ref => {
          this.element = ref;
        }}
      >
        <code
          css={css`
            font-family: 'Andale Mono', 'Ubuntu Mono', monospace;
          `}
          className={language}
        >
          {children}
        </code>
      </pre>
    );
  }
}

CodeView.propTypes = {
  language: PropTypes.string,
  children: PropTypes.node
};

CodeView.defaultProps = {
  language: 'language-js',
  children: ''
};

export default CodeView;

import React from 'react';
import PropTypes from 'prop-types';

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-okaidia.css';

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
    const { children } = this.props;
    return (
      <pre
        ref={ref => {
          this.element = ref;
        }}
      >
        <code className="language-jsx">{children}</code>
      </pre>
    );
  }
}

CodeView.propTypes = {
  children: PropTypes.node
};

CodeView.defaultProps = {
  children: ''
};

export default CodeView;

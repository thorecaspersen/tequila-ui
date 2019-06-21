import React from 'react';
import PropTypes from 'prop-types';
import Card from 'tequila-ui/Card';
import CodeView from 'tequila-ui/CodeView';

class ComponentExample extends React.Component {
  constructor(props) {
    super(props);
    // show code exsampel or not
    this.state = { showCode: false };
  }

  toggleCode = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { showCode: !prevState.showCode };
    });
  };

  render() {
    const { showCode } = this.state;
    const { example } = this.props;
    const { componentName } = this.props;

    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    /* eslint-disable global-require, import/no-dynamic-require */
    const ExampleComponent = require(`./examples/${componentName}/${
      example.name
    }`).default;
    /* eslint-enable global-require, import/no-dynamic-require */

    return (
      <Card>
        {example.description && <h4>{example.description}</h4>}

        <ExampleComponent />

        <p>
          <button onClick={this.toggleCode} type="button">
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
        </p>

        {showCode && (
          <CodeView language="language-jsx">{example.code}</CodeView>
        )}
      </Card>
    );
  }
}

ComponentExample.propTypes = {
  example: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    code: PropTypes.string
  }).isRequired,
  componentName: PropTypes.string.isRequired
};

export default ComponentExample;

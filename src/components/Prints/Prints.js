import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// this site was good docs: https://gridbyexample.com/examples/
import ReactToPrint from 'react-to-print';

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { printCards } = this.props;
    return (
      <div
        css={css`
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          @media print {
            grid-gap: 0px;
            grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          }
        `}
      >
        {printCards}
      </div>
    );
  }
}

/** Prints, wrapper for PrintNodes component */
const Prints = ({ children }) => {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button
            type="button"
            css={css`
              padding: 10px;
              font-size: 16px;
              margin-bottom: 10px;
            `}
          >
            Print!
          </button>
        )}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} printCards={children} />
    </div>
  );
};

Prints.propTypes = {
  children: PropTypes.node
};

Prints.defaultProps = {
  children: ''
};

export default Prints;

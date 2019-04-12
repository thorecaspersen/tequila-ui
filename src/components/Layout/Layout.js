import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** Layout page wrapper for holy grail design */
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, minHeight } = this.props;
    let columnsNumber = 1; // its numbers of sidebars + 1
    let gridTemplateColumnsValue = '';
    let gridTemplateRows = '';
    React.Children.forEach(children, child => {
      if (
        ['Header', 'Content', 'Layout', 'Footer'].includes(
          child.type.displayName
        )
      ) {
        // if content or layout: 1 fr, else prop.height
        // forexsample: 100px 1fr 100px
        gridTemplateRows += ['Header', 'Footer'].includes(
          child.type.displayName
        )
          ? `${child.props.height} `
          : '1fr ';
      }
      if (child.type.displayName === 'Content') {
        gridTemplateColumnsValue += '1fr ';
      }
      if (child.type.displayName === 'Sidebar') {
        gridTemplateColumnsValue += `${child.props.width} `;
        columnsNumber += 1;
      }
    });
    // remove space from end
    gridTemplateColumnsValue.trim();

    const contentAndSidebarRow = [];
    let tempString;
    // map for grid-template-areas only
    let gridTemplateAreasValue = React.Children.map(children, child => {
      if (['Header', 'Footer'].includes(child.type.displayName)) {
        // forexsample. 'Header Header Header'
        tempString = `${child.type.displayName} `;
        return tempString.repeat(columnsNumber).trim();
      }
      if (['Content', 'Layout', 'Sidebar'].includes(child.type.displayName)) {
        if (child.type.displayName === 'Sidebar') {
          contentAndSidebarRow.push(child.type.displayName + child.props.side);
        } else {
          contentAndSidebarRow.push(child.type.displayName);
        }

        if (contentAndSidebarRow.length >= columnsNumber) {
          // array is filled.
          return contentAndSidebarRow.join(' ');
        }
      }
    });

    // manipulate the array, so each value have ' around them
    gridTemplateAreasValue = gridTemplateAreasValue.map(element => {
      return `'${element}'`;
    });

    return (
      <div
        css={css`
          display: grid;
          grid-template-areas: ${gridTemplateAreasValue};
          grid-template-columns: ${gridTemplateColumnsValue};
          grid-template-rows: ${gridTemplateRows};
          min-height: ${minHeight};
        `}
      >
        {children}
      </div>
    );
  }
}

Layout.propTypes = {
  minHeight: PropTypes.string,
  children: PropTypes.node
};

Layout.defaultProps = {
  minHeight: '100vh',
  children: ''
};
export default Layout;

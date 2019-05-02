import React from 'react';
import Prints from 'tequila-ui/Prints';
import PrintNote from 'tequila-ui/SubComponents/PrintNote';
import PrintNoteCode from 'tequila-ui/SubComponents/PrintNoteCode';
import PrintNoteHeadline from 'tequila-ui/SubComponents/PrintNoteHeadline';

/** Prints */
export default class ExamplePrnts extends React.Component {
  render() {
    const code = `
if (true) {
  while (true) {
        doSomething();
  }
}
    `;
    return (
      <Prints>
        <PrintNote bg="#ec985a">
          <PrintNoteHeadline titel="Headline" />
          <p style={{ padding: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
        <PrintNote bg="#ec985a">
          {' '}
          <p style={{ padding: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
        <PrintNote bg="#ec985a">
          {' '}
          <p style={{ padding: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
        <PrintNote bg="#ec985a">
          <p style={{ padding: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
        <PrintNote bg="#ec985a">
          <p style={{ padding: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <PrintNoteCode>{code}</PrintNoteCode>
        </PrintNote>
        <PrintNote>
          <PrintNoteCode fill>{code}</PrintNoteCode>
        </PrintNote>
        <PrintNote bg="#ec985a">
          {' '}
          <p style={{ padding: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
        <PrintNote bg="#ec985a">
          {' '}
          <p style={{ padding: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
        <PrintNote bg="#ec985a">
          {' '}
          <p style={{ padding: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
        <PrintNote bg="#ec985a">
          {' '}
          <p style={{ padding: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
      </Prints>
    );
  }
}

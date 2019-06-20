import React from 'react';
import Prints from 'tequila-ui/Prints';
import PrintNote from 'tequila-ui/SubComponents/PrintNote';
import PrintNoteCode from 'tequila-ui/SubComponents/PrintNoteCode';
import PrintNoteHeadline from 'tequila-ui/SubComponents/PrintNoteHeadline';
import PrintNoteText from 'tequila-ui/SubComponents/PrintNoteText'

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
          <PrintNoteText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </PrintNoteText>
        </PrintNote>
        <PrintNote bg="#ec985a">
          {' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
        <PrintNote bg="#ec985a">
          {' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
        <PrintNote bg="#ec985a">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
        <PrintNote bg="#ec985a">
          <PrintNoteText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </PrintNoteText>
          <PrintNoteCode>{code}</PrintNoteCode>
        </PrintNote>
        <PrintNote>
          <PrintNoteCode fill>{code}</PrintNoteCode>
        </PrintNote>
        <PrintNote bg="#ec985a">
          {' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
        <PrintNote bg="#ec985a">
          {' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
        <PrintNote bg="#ec985a">
          {' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
        <PrintNote bg="#ec985a">
          {' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PrintNote>
      </Prints>
    );
  }
}

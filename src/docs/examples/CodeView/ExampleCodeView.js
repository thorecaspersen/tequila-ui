import React from 'react';
import CodeView from 'tequila-ui/CodeView';

/** codeview */
export default function ExampleEmotion() {
  const code = `
  if (true) {
    while (true) {
      doSomething();
    }
  }
  `;

  return <CodeView>{code}</CodeView>;
}

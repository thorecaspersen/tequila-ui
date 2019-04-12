import React from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';
import './index.css';
import Docs from './docs/Docs';

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true // RHL will not change render method
});

ReactDOM.render(<Docs />, document.getElementById('root'));

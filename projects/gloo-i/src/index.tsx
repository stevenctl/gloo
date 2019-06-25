/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as ReactDOM from 'react-dom';
import { GlooIApp } from './GlooIApp';
import * as serviceWorker from './serviceWorker';
import './fontFace.css';

ReactDOM.render(<GlooIApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

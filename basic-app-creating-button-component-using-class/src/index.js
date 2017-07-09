/* src/index.js - This is where you initialize the app and call ReactDOM.render,
so it makes sense to keep this at the top level.
This is the JavaScript entry point*/
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './App';

/* ReactDOM.render takes two arguments. The first is a virtual DOM element. And the second is a real DOM element where we want to place our virtual DOM. */
ReactDOM.render(<Application />, document.getElementById('root'));

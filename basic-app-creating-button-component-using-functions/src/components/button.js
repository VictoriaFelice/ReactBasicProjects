/* Creating a component using stateless react functions. (those types of components are called stateless/dumb components)
If your component doesn’t have its own state, you can just use regular JavaScript functions:

function Button (props) {
    return (
        <button className={props.className}>{props.btnText}</button>
    );
}

You can also use ES6 arrow functions:
const Button = (props) => <button className={props.className}>{props.btnText}</button>;

the same arrow function, using return: */
import React, { Component } from 'react';

const Button = (props) => {
    return <button className={props.className}>{props.btnText}</button>;
}

export default Button;
import React, { Component } from 'react';

/*
1. props
stands for "properties" and they are the properties of your components much like a regular javascript object would have properties describing the object.
Same thing here in React except you're using props.text instead of this.text
2. className
we use className instead of class, because class is a reserved word in JavaScript
3. to create an instance of a Button component anywhere, we use: <Button />
4. in the example below, we use ES6 new class syntax
*/
class Button extends Component {
    render() {
        return (
            <button className={this.props.className}>{this.props.btnText}</button>
        );
    }
}

export default Button;
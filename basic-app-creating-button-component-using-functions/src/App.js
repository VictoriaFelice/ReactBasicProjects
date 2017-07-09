import React, { Component } from 'react';
import './index.css';
import Button from './components/button';

class Application extends Component {
  render() {
    return (
      <div className="App">
        <h2>Creating Button component, using stateless react functions</h2>
        <Button className="btn btn-default" btnText="Cancel"/>
				<Button className="btn btn-primary" btnText="Submit"/>
      </div>
    );
  }
}

export default Application;

import React, { Component } from 'react';
import './index.css';
import Button from './components/button';

/*This component Application will represent our app.*/
class Application extends Component {
  render() {
    return (
      <div className="App">
        <h2>My 1st react app with a button component</h2>
        <Button className="btn btn-default" btnText="Cancel"/>
				<Button className="btn btn-primary" btnText="Submit"/>
      </div>
    );
  }
}

export default Application;

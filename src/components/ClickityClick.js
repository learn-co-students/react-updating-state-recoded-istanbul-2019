// Code ClickityClick Component Here
import React from 'react';

export default class ClickityClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
    };
  }

  handleClick = event => {
    this.setState({
      hasBeenClicked: true
    });
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
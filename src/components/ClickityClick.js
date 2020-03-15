// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
    constructor(){
        super();
        this.state = {
            toggled: false
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
            toggled: !previousState.toggled
        }
    })
    } 
          //          hasBeenClicked:true

       // console.log(this.state.hasBeenClicked);

    render() {
        return (
            <div>
            <p>I have {this.state.toggled ? null : 'not'} been clicked!</p>
            <button onClick= {this.handleClick}>Click me!</button>
            </div>
        );
    }
}

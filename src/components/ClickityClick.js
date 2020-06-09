// Code ClickityClick Component Here
import React, { Component } from 'react'

export class ClickityClick extends Component {
    constructor() {
        super();

        this.state = {
            hasBeenClicked: false,
            count: 0,
        };
    }

    handleClick = () => {

        this.setState(pState => {
            return {
                hasBeenClicked: !pState.hasBeenClicked
            }
        }, () => console.log(this.state.hasBeenClicked))

    }

    increaseCount = () => {
        this.setState(pState => {
            return {
                count: pState.count + 1
            }
        })
    }

    resetCount = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
                <p>I was pressed {this.state.count} times</p>
                <button onClick={this.increaseCount}>add</button>
                <button onClick={this.resetCount}>reset</button>
            </div>
        )
    }
}

export default ClickityClick
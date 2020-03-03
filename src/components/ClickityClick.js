// Code ClickityClick Component Here

import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick';

export default class ClickityClick extends React.Component {

    constructor() {
        super()
        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue',
            addressInfo: {
                street: null,
                number: null,
                city: null,
                country: null
              },
        }
    }

    // handleClick = () => {
    //     this.setState({
    //         addressInfo: Object.assign({}, this.state.addressInfo, {
    //             city: 'Istanbul'
    //         })
    //     })
    // }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true,
            addressInfo: {
                ...this.state.addressInfo,
                city: 'Istanbul',
                country: 'Turkey'
            }
        }, () => console.log(this.state.hasBeenClicked))
    }

    // Using the spread operator is RECOMMENDED!

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }

}

ReactDOM.render(<ClickityClick />, document.getElementById('root'));


// Code ClickityClick Component Here
import React from "react"

class ClickityClick extends React.Component{
  constructo(){
    super()
    this.state={
      hasBeenClicked:false,
      currentTheme:"blue",
      
    }
  }
  
  handleClik=()=>{
    this.setState({
      hasBeenClicked:true
    })
  }
  
  render(){
    return(
      
      <div>
      <p>I have {this.state.hasBeenClicked ? null: "not"} been clicked!  </p>
      <button onClick={this.handleClik}>Click Me!  </button>
      </div>
      
      )
  }
}


export default ClickityClick
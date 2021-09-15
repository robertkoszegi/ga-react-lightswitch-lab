import React, { Component } from 'react'
import './App.css';
import Top from './components/Top/Top'
import Bottom from './components/Bottom/Bottom'


class App extends Component {

  state = {
    switch: "off",
    backgroundColor: "black"
  }

  handleLightswitch = () => {
    this.setState(this.state.switch === "off" ? {switch: "on" } : {switch: "off"})
    this.setState(this.state.switch === "off" ? {backgroundColor: "white" } : {backgroundColor: "black"})

    console.log(this.state.switch, this.state.backgroundColor)
    
  }


  render() {
    return (
      <div className='App'>Lightswitch
        <Top backgroundColor={this.state.backgroundColor}/>
        <Bottom handleLightswitch={this.handleLightswitch} switch={this.state.switch}/>
      </div>
    )
  }
}


export default App;

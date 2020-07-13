import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { showCounter: false};

  /*  componentDidMount(){
    window.ReactCounter.mount();
  } */
  componentDidUpdate(prevProps, prevState) {
    const { showCounter} = this.state;
    if (prevState.showCounter !== showCounter) {
      if (showCounter) {
        window.ReactCounter.mount();
      }else {
        window.ReactMicroApp.mount();
      }
    }
  }

  toggleCounter = () => {
     this.setState(({ showCounter }) => {
      return { showCounter: !showCounter };
    }); 
  };


  render() {
    return (
      <div className="App">
        <h1>Welcome to Main Application</h1>
        <div className ="button">
          <button onClick={this.toggleCounter}>Counter App</button>
          <button onClick={this.toggleCounter}>MicroApp</button>
          </div>
        <div id="counter-app" />
          <div id="micro-app" />
      </div>
    );
  }
}

export default App;

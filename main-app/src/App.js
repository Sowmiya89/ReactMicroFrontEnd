import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { showCounter: false }

  componentDidMount(){
    window.ReactCounter.mount();
  }
 /* componentDidUpdate(prevProps, prevState) {
    const { showCounter } = this.state;
    if (prevState.showCounter !== showCounter) {
      if(showCounter){
        window.ReactCounter.mount();
      } else{
        window.ReactCounter.unmount();
      }
    }
  } */

  toggleCounter = () => {
      this.setState(({ showCounter }) => {
          return { showCounter: !showCounter }
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img 
            onClick={this.toggleCounter} 
            src={logo} 
            className="App-logo" 
            alt="logo" 
          />
          <div id="counter-app"></div>
          <p>
            This is the main App. 
          </p>
        </header>
      </div>
    );
  }
}

export default App;

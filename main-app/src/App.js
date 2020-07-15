import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { showCounter: false, title: "React App", currentCount: 3 };

  /*  componentDidMount(){
    window.ReactCounter.mount();
  } */
  componentDidUpdate(prevProps, prevState) {
    const { showCounter, title,currentCount } = this.state;
    const shouldUpdateCounter =
      prevState.showCounter !== showCounter || prevState.title !== title;
    if (shouldUpdateCounter) {
      if (showCounter) {
         const counterProps = {
          title,
          initialCount: currentCount,
          onCountUpdate: this.onCountUpdate,
        }; 
        window.ReactCounter.mount(counterProps);
      } else {
        window.ReactMicroApp.mount();
      }
    }
  }

  toggleCounter = () => {
    this.setState(({ showCounter }) => {
      return { showCounter: !showCounter };
    });
  };

  onTitleChange = ({ target }) => {
    this.setState({ title: target.value });
  };

  onCountUpdate = (currentCount) => {
    this.setState({ currentCount });
  };

  render() {
    const { title,currentCount } = this.state;
    return (
      <div className="App">
        <h1>Welcome to Main Application</h1>
        <div className="button">
          <button onClick={this.toggleCounter}>Counter App</button>
          <button onClick={this.toggleCounter}>MicroApp</button>
        </div>
       
        <input value={title} onChange={this.onTitleChange} />
        <div id="counter-app" />
        <div id="micro-app" />
        <div>{`The count is ${currentCount}`}</div>
      </div>
    );
  }
}

export default App;

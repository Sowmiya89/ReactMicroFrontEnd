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
        <div className="Apptitle">
          Welcome to Main Application 
        </div>
        <input className="titlechange" value={title} onChange={this.onTitleChange} />
        <div className="counttotal">{`The count is ${currentCount}`}</div>
        <div className="button">
            <button className="button-top" onClick={this.toggleCounter}>Counter App</button>
            <button className="button-bottom" onClick={this.toggleCounter}>MicroApp</button>      
        </div>
        
        <div id="counter-app" className="counterApp"/>
        <div id="micro-app" className="microApp"/>
        
      </div>
    )
  }
}

export default App;

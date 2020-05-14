import React, { Component } from 'react';
import MainContainer from './Components/MainContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 以下にRails*Ajax通信をする */}
        <MainContainer />
      </div>
    )
  }
}

export default App;

import React, { Component } from "react";
import MainContainer from "./Components/MainContainer";
import "./App.css";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* 以下にRails*Ajax通信をする */}
        <MainContainer />
      </div>
    );
  }
}

export default App;

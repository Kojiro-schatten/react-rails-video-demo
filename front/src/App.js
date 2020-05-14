import React, { Component } from 'react';
import MainContainer from './Components/MainContainer'
import styled from 'styled-components'
import './App.css';
import Header from './Components/Header';
import GlobalStyle from './Components/styles/GlobalStyles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          {/* 以下にRails*Ajax通信をする */}
        <MainContainer />
      </div>
    )
  }
}

export default App;

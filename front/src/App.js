import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import Movie from './Components/Movie'
import NotFound from './NotFound'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            {/* 以下にRails*Ajax通信をする */}
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/movie" component={Movie} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

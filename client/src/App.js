import React, { Component } from 'react';
import Home from "./components/HomeComponent";
import { Switch, Route } from "react-router";
import Match from "./components/MatchComponent";


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Matchs" component={Match} />
        </Switch>
      </div>
    );
  }
}


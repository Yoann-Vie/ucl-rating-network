import React, { Component } from 'react';
import Home from "./components/HomeComponent";
import { Switch, Route } from "react-router";
import Match from "./components/MatchComponent";


export default class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}


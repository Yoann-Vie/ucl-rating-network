import React, { Component } from 'react';
import Home from "./components/HomeComponent";
import { Switch, Route } from "react-router";


export default class App extends Component<Props> {
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


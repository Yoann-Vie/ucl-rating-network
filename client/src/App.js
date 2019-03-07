import React, { Component } from 'react';
import Home from "./components/HomeComponent";
import { Switch, Route } from "react-router";
import Match from "./components/MatchComponent";

const Page404 = ({ location }) => (
  <div>
     <h2 style={{marginTop: 70}}>Eh non la route n'est pas bonne !</h2>
     <div>
       <img style={{marginTop: 70}} src="/images/logos/lukaku.png" className="App-logo" alt="lukaku" />
     </div>
  </div>
);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Matchs" component={Match} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}


import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent';

class Home extends Component {

    render() {
      return (
        <div className="App">
          <HeaderComponent />
            <img src="/images/logos/ucl.png" className="App-logo" alt="logo" />                
        </div>
      );
    }
}
  
export default Home;
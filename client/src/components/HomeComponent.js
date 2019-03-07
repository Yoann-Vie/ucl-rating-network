import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import LoginFormContainer from '../containers/LoginFormContainer';
import HeaderComponent from './HeaderComponent';

class Home extends Component {

    constructor(props) {
        super(props)
    }

    handleToggle = () => {
        const newTheme = this.state.theme === 'dark' 
        ? 'light' : 'dark';
    
        this.setState({
          theme: newTheme
        });
    }

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
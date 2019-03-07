import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import LoginFormContainer from '../containers/LoginFormContainer';
import HomeComponent from './HeaderComponent';

class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state ={
          theme: "dark"
        }
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
          <HomeComponent />
            <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Learn React
                </a>
                
        </div>
      );
    }
}
  
export default Home;
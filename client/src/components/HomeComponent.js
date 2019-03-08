import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent';

class Home extends Component {

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
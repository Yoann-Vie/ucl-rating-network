import React, { Component } from 'react';
import './css/HeaderComponent.css';
import LoginFormContainer from '../containers/LoginFormContainer';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          isLogged: false,
          loggedName: ""
        };
    
        this.toggle = this.toggle.bind(this);
        this.toggleOff = this.toggleOff.bind(this);

    }

    parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };

    componentDidMount = () => {
        if(localStorage.getItem("isLogged") === "1"){
            this.setState({
                isLogged: true
            })
        }

        if(localStorage.getItem('token')){
            var username = this.parseJwt(localStorage.getItem('token')).username;

            this.setState({
                loggedName: username
            })
        }
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    toggleOff() {    
        this.setState({
            loggedName: "",
            isLogged: false
        })
        this.forceUpdate()
        localStorage.clear()
    }

    render() {

        if(this.state.isLogged === true){
            var content = <div className="loginP">      
                <div className="displayInlineBlock">
                    <Button onClick={this.toggleOff} color="primary">Logout</Button>
                </div>        
                <div className="profileTop displayInlineBlock">
                    <p>{this.state.loggedName}</p>
                    <img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="profilePic" className="profilePic"/>
                </div>
            </div>
            
        }
        else{
            var content = <Button color="primary" onClick={this.toggle} className="loginBtn">Login</Button>
        }

        return (
            <div className="header container">
                <div className="row">
                    <div className="col-7">
                        <img src="/images/logos/logo.png" className="logo" alt="logo" />
                    </div>
                    <div className="col-5">
                        {content}
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <LoginFormContainer />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
  
export default Home;
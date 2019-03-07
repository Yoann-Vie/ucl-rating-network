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
            var content = <p>
                {this.state.loggedName}
                <Button onClick={this.toggleOff} color="primary">Logout</Button>
            </p>
        }
        else{
            var content = <Button color="primary" onClick={this.toggle} >Login</Button>
        }

        return (
            <div className="header container">
                <div className="row">
                    <div className="col-8">
                        <img src="/images/logos/logo.png" className="logo" alt="logo" />
                    </div>
                    <div className="col-4">
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
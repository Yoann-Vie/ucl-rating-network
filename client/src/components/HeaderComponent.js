import React, { Component } from 'react';
import './css/HeaderComponent.css';
import LoginFormContainer from '../containers/LoginFormContainer';
import { Button, Modal, ModalBody } from 'reactstrap';
import fetchData from "../functions/fetchFunction";
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          isLogged: false,
          loggedName: "",
          pictureUrl: ""
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
                loggedName: username,
            })
            
            fetchData("GET", "user/" + username, localStorage.getItem('token'))
            .then((res) => {
                this.setState({
                    pictureUrl: res.image
                })
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
        var content = ''

        if(this.state.isLogged === true){
            content = <div className="displayInlineBlock loginP">
                <div className="profileTop displayInlineBlock">
                    <p>{this.state.loggedName}</p>
                </div>
                <img src={this.state.pictureUrl} alt="profilePic" className="profilePic"/>
                <div className="displayInlineBlock">
                    <Button onClick={this.toggleOff} color="primary">Logout</Button>
                </div>
            </div>
        }
        else{
            content = <div className="displayInlineBlock loginP">
                <Button color="primary" onClick={this.toggle} className="loginBtn">Login</Button>
            </div>
        }

        return (
            <div className="header">
                <div className="row" style={{maxHeight: "100%"}}>
                    <div className="col-5" style={{maxHeight: "100%"}}>
                        <Link to="/" className={'link-no-style'}>
                            <img src="/images/logos/logo.png" className="logo" alt="logo" />
                        </Link>
                    </div>
                    <div className="col-7 user-menu" style={{maxHeight: "100%"}}>
                        <div className="displayInlineBlock">
                            <Button color="success">
                                <Link to="/Matchs" className={'link-no-style'}>See Matches</Link>
                            </Button>
                        </div>
                        {content}
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <LoginFormContainer />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
  
export default Home;
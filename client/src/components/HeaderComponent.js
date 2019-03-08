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

        var content = "";

        if(this.state.isLogged === true){
            content = <div className="displayInlineBlock loginP">
                <div className="displayInlineBlock">
                    <Button onClick={this.toggleOff} color="primary">Logout</Button>
                </div>        
                <div className="profileTop displayInlineBlock">
                    <p>{this.state.loggedName}</p>
                    <img src={this.state.pictureUrl} alt="profilePic" className="profilePic"/>
                </div> 
            </div>
        }
        else{
            content = <Button color="primary" onClick={this.toggle} className="loginBtn">Login</Button>

        }

        return (
            <div className="header container">
                <div className="row" style={{maxHeight: "100%"}}>
                    <div className="col-7" style={{maxHeight: "100%"}}>
                        <img src="/images/logos/logo.png" className="logo" alt="logo" />
                    </div>
                    <div className="col-5" style={{maxHeight: "100%"}}>
                        {content}
                        <div className="displayInlineBlock">
                            <Button color="warning">
                                <Link to="/Matchs">See Matches</Link>
                            </Button>  
                        </div>  
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
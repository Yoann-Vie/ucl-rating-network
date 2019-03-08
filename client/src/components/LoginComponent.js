import React from 'react';
import "./css/MatchComponent.css"; 
import { InputGroup, InputGroupAddon, Input, Alert } from 'reactstrap';


class LoginComponent extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                display: "none"
            };
        }
      
        render() {
            return <form onSubmit={
                    (event) => {
                        event.preventDefault();
                        this.props.onSubmit();
                        return false;
                    }
                }>
                <InputGroup>
                    <InputGroupAddon addonType="prepend" >Username</InputGroupAddon>
                    <Input onChange= {(event) => this.props.onChange(event.currentTarget.value, "username")}/>
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
                    <Input type="password" onChange= {(event) => this.props.onChange(event.currentTarget.value, "password")}/>
                </InputGroup>
                <br />
                <InputGroup>
                    <Input type="submit"/>
                </InputGroup>
                <div style={{marginTop:20, display: this.props.error}}>
                  <Alert color="danger">
                    Bad credentials !!
                  </Alert>
                </div>
            </form>
        }

}
export default LoginComponent;
import React from 'react';
import "./css/MatchComponent.css"; 
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';


class LoginComponent extends React.Component {
      
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
            </form>
        }

}
export default LoginComponent;
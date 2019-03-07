import React, { Component } from 'react';
import "./css/MatchComponent.css"; 
import { Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import classnames from 'classnames';


class LoginComponent extends React.Component {
        constructor(props) {
          super(props);

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
            </form>
        }

}
export default LoginComponent;
import React from "react";

class LoginForm extends React.PureComponent {
    render() {
        return <form onSubmit={
            (event) => {
            event.preventDefault();
            this.props.onSubmit();
            return false;
            }
        }>
        <p>Username</p>
        <input name="username" onChange= {(event) => this.props.onChange(event.currentTarget.value, "username")}/>
        <p>Password</p>
        <input name="password" onChange= {(event) => this.props.onChange(event.currentTarget.value, "password")}/>
        <input type="submit" value="Submit" />
    </form>
    }
    
}

export default LoginForm;
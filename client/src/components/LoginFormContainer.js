import React from "react";
import LoginForm from "./LoginForm";

class LoginFormContainer extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = () => {
        console.log(this.state);
    }

    handleChange = (value,field) => {
        this.setState({
            [field]: value
        });
    }

    render() {

        return <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange} />;
    }
}

export default LoginFormContainer;
import React from "react";
import LoginForm from "../components/LoginComponent";
import fetchData from "../functions/fetchFunction";

class LoginFormContainer extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = () => {
        fetchData("POST", "login_check", null, this.state)
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
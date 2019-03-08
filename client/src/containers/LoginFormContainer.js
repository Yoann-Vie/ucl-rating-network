import React from "react";
import LoginForm from "../components/LoginComponent";
import fetchData from "../functions/fetchFunction";

class LoginFormContainer extends React.Component {

    state = {
        username: "",
        password: "",
        display: "none"
    }

    handleSubmit = () => {
        fetchData("POST", "login_check", null, this.state)
        let self = this
        setTimeout(function(){
            if(localStorage.getItem('token') === "undefined" || ! localStorage.getItem('token')){
                self.setState({
                    display: "block"
                })
            }
        }, 1500)
    }

    handleChange = (value, field) => {
        this.setState({
            [field]: value
        });
    }

    render() {

        return <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange} error={this.state.display}/>;
    }
}

export default LoginFormContainer;
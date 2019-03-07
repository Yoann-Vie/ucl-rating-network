import React from "react";
import LoginForm from "../components/LoginComponent";

class LoginFormContainer extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = () => {
        fetch('http://127.0.0.1:3000/login_check', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((response) => response.json())
        .then(
            data => localStorage.setItem("token", data.token)
        )
        .then(
            localStorage.setItem('isLogged', 1)
        )
        .then(
            setTimeout(function(){ 
                window.location.reload() 
            }, 1500)
        )
        .catch(error => console.log(error));
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
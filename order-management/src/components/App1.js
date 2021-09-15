import React/*, { useState }*/ from "react";


/*function App1() {
    const { values, setValues } = useState({
        email: "",
        password: ""
    });
    const handleEmailChange = (event) => {
        setValues({ ...values, email: event.target.value })
    }
    const handlePasswordChange = (event) => {
        setValues({ ...values, password: event.target.value })
    }
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={onSubmit}>
            <input onChange={handleEmailChange} value={values.email} type="text" placeholder="email" name="email" />
            <input onChange={handlePasswordChange} value={values.password} type="text" placeholder="password" name="password" />
            <input type="submit" />
        </form>
    )
}
export default App1;*/


class App2 extends React.Component {
    state = {
        email: "",
        password: "",
        emailError: "",
        passwordError: ""
    }

    handleEmailChange = (event) => {
        this.setState({ ...this.state, email: event.target.value })
    };
    handlePasswordChange = (event) => {
        this.setState({ ...this.state, password: event.target.value })
    };

    validate = () => {
        let emailError = "";
        let passwordError = "";
        if (!this.state.email.includes('@')) {
            emailError = "invalid email";
        }

        if (emailError) {
            this.setState({ emailError });
            return false;
        }
        return true;
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleEmailChange} value={this.state.email} type="text" placeholder="email" name="email" />
                <div style={{ fontSize: 12, color: 'red' }}>{this.state.emailError}</div>
                <input onChange={this.handlePasswordChange} value={this.state.password} type="text" placeholder="password" name="password" />
                <div style={{ fontSize: 12, color: 'red' }}>{this.state.passwordError}</div>
                <input type="submit" />
            </form>
        )
    }
}
export default App2

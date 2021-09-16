import React from "react";
import TextClass from "./TextClass";
import Error from "./Error"
import validator from 'validator';

class OrderSubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            nameError: "",
            emailError: "",
            phoneError: "",
            isValid: false,
            disabled: true
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.phoneHandler = this.phoneHandler.bind(this);
    }


    validate = () => {
        this.setState({ isValid: true, disabled: false });

        let nameError = "";
        let emailError = "";
        let phoneError = "";

        if (!/^[A-Za-z ]+$/.test(this.state.name)) {
            nameError = "invalid name";
        }

        if (!validator.isEmail(this.state.email)) {
            emailError = "invalid email";
        }

        if (!validator.isMobilePhone(this.state.phone)) {
            phoneError = "invalid phone number";
        }


        this.setState({ nameError: nameError, isValid: !nameError, disabled: nameError });

        this.setState({ emailError: emailError, isValid: !emailError, disabled: emailError });

        this.setState({ phoneError: phoneError, isValid: !phoneError, disabled: phoneError });



    }

    nameHandler = arg => {
        this.setState({
            name: arg
        })
        this.validate();
    }

    emailHandler = arg => {
        this.setState({
            email: arg
        })
        this.validate();
    }

    phoneHandler = arg => {
        this.setState({
            phone: arg
        })
        this.validate();
    }

    handleSubmit = event => {
        event.preventDefault();
        alert(this.state);
        console.log(this.state);
        return true;
    };

    render() {
        return (
            <form onSubmit="return this.handleSubmit();">

                <TextClass value={this.state.name} fieldName={"name"} handler={this.nameHandler.bind(this)} />
                <Error props={this.state.nameError} />

                <TextClass value={this.state.email} fieldName={"email"} handler={this.emailHandler.bind(this)} />
                <Error props={this.state.emailError} />

                <TextClass value={this.state.phone} fieldName={"phone"} handler={this.phoneHandler.bind(this)} />
                <Error props={this.state.phoneError} />

                <button type="submit" disabled={this.state.disabled} >Submit </button>
            </form >
        )
    }
}

export default OrderSubmitForm

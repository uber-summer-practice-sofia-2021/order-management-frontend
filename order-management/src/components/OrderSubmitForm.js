import React from "react";
import TextClass from "./TextClass";
import Error from "./Error"

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

        }
        this.nameHandler = this.nameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.phoneHandler = this.phoneHandler.bind(this);
    }


    validate = () => {
        this.setState({ isValid: true });

        let nameError = "";
        let emailError = "";
        let phoneError = "";

        if (!/^[A-Za-z ]+$/.test(this.state.name)) {
            nameError = "invalid name";
        }

        if (!this.state.email.includes('@')) {
            emailError = "invalid email";
        }

        var phoneValidationForm = /^\0?([0-9]{9})\)$/;
        if (!this.state.phone.match(phoneValidationForm)) {
            phoneError = "invalid phone number";
        }

        if (nameError) {
            this.setState({ nameError: nameError, isValid: false });
        }
        if (emailError) {
            this.setState({ emailError: emailError, isValid: false });
        }
        if (phoneError) {
            this.setState({ phoneError: phoneError, isValid: false });
        }


    }

    nameHandler = arg => {
        this.setState({
            name: arg
        })
    }

    emailHandler = arg => {
        this.setState({
            email: arg
        })
    }

    phoneHandler = arg => {
        this.setState({
            phone: arg
        })
    }

    handleSubmit = event => {
       /* this.validate();
        if (!this.state.isValid) {
            console.log("wrong");
            alert("Wrong input data. Please re-enter the data!");
            return;
        }*/
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <TextClass value={this.state.name} fieldName={"name"} handler={this.nameHandler.bind(this)} />
                <Error props={this.state.nameError} />
                <TextClass value={this.state.email} fieldName={"email"} handler={this.emailHandler.bind(this)} />
                <Error props={this.state.emailError} />
                <TextClass value={this.state.phone} fieldName={"phone"} handler={this.phoneHandler.bind(this)} />
                <Error props={this.state.phoneError} />

                <input type="submit" />
            </form>
        )
    }
}

export default OrderSubmitForm

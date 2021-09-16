import React from "react";
import TextClass from "./TextClass";
import Error from "./Error"

class OrderSubmitForm extends React.Component {
    state = {
        email: "",
        phone: "",
        emailError: "",
        isValid: false,

    }


    validate = () => {
        let emailError = "";
        let passwordError = "";
        if (!this.state.email.includes('@')) {
            emailError = "invalid email";
        }

        if (emailError) {
            this.setState({ [this.state.emailError]: emailError, [this.state.isValid]: false });
        }
        this.setState({ [this.state.isValid]: true });

    }

    onChangeEmail = event => {
        this.setState({ [this.state.email]: event.target.value })
    }

    handleSubmit = event => {
        if (!this.state.isValid) {
            return;
        }
        event.preventDefault();
        console.log(this.state);

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <TextClass /*value={this.state.email}*/ fieldName={"email"} onChange={this.onChangeEmail} />
                <Error props={"invalid email"} />

                <input type="submit" />
            </form>
        )
    }
}

export default OrderSubmitForm

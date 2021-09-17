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
            length: "0",
            height: "0",
            width: "0",
            weight: "0",
            nameError: "",
            emailError: "",
            phoneError: "",
            lengthError: "",
            heightError: "",
            widthError: "",
            weightError: "",
            isValid: false,
            disabled: true
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.phoneHandler = this.phoneHandler.bind(this);

        this.lengthHandler = this.lengthHandler.bind(this);
        this.heightHandler = this.heightHandler.bind(this);
        this.widthHandler = this.widthHandler.bind(this);
        this.weightHandler = this.weightHandler.bind(this);
    }


    validate = () => {
        this.setState({ isValid: true, disabled: false });

        let nameError = "";
        let emailError = "";
        let phoneError = "";
        let lengthError = "";
        let heightError = "";
        let widthError = "";
        let weightError = "";

        if (!/^[A-Za-z ]+$/.test(this.state.name)) {
            nameError = "invalid name";
        }

        if (!validator.isEmail(this.state.email)) {
            emailError = "invalid email";
        }

        if (!validator.isMobilePhone(this.state.phone)) {
            phoneError = "invalid phone number";
        }

        if (!validator.isNumeric(this.state.length) || this.state.length <= 0) {
            lengthError = "invalid length";
        }

        if (!validator.isNumeric(this.state.height) || this.state.height <= 0) {
            heightError = "invalid height";
        }

        if (!validator.isNumeric(this.state.width) || this.state.width <= 0) {
            widthError = "invalid width";
        }

        if (!validator.isNumeric(this.state.weight) || this.state.weight <= 0) {
            weightError = "invalid weight";
        }


        this.setState({ nameError: nameError });
        this.setState({ emailError: emailError });
        this.setState({ phoneError: phoneError });
        this.setState({ lengthError: lengthError });
        this.setState({ heightError: heightError });
        this.setState({ widthError: widthError });
        this.setState({ weightError: weightError });

        this.setState({ isValid: !(nameError || emailError || phoneError || lengthError || heightError || widthError || weightError) });
        this.setState({ disabled: !this.state.isValid });


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

    lengthHandler = arg => {
        this.setState({
            length: arg
        })
        this.validate();
    }

    heightHandler = arg => {
        this.setState({
            height: arg
        })
        this.validate();
    }

    widthHandler = arg => {
        this.setState({
            width: arg
        })
        this.validate();
    }

    weightHandler = arg => {
        this.setState({
            weight: arg
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

                <TextClass value={this.state.length} fieldName={"length"} handler={this.lengthHandler.bind(this)} />
                <Error props={this.state.lengthError} />



                <TextClass value={this.state.height} fieldName={"height"} handler={this.heightHandler.bind(this)} />
                <Error props={this.state.heightError} />

                <TextClass value={this.state.width} fieldName={"width"} handler={this.widthHandler.bind(this)} />
                <Error props={this.state.widthError} />

                <TextClass value={this.state.weight} fieldName={"weight"} handler={this.weightHandler.bind(this)} />
                <Error props={this.state.weightError} />

                <button type="submit" disabled={this.state.disabled} >Submit </button>
            </form >
        )
    }
}

export default OrderSubmitForm

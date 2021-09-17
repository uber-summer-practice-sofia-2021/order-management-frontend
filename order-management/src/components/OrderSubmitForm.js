import React, { useEffect } from "react";
import TextClass from "./TextClass";
import Error from "./Error"
import RadioButton from "./RadioButton"
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
            disabled: true,
            radio: "standard"
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.phoneHandler = this.phoneHandler.bind(this);

        this.lengthHandler = this.lengthHandler.bind(this);
        this.heightHandler = this.heightHandler.bind(this);
        this.widthHandler = this.widthHandler.bind(this);
        this.weightHandler = this.weightHandler.bind(this);

        this.deliveryTypeHandler = this.deliveryTypeHandler.bind(this)
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

    deliveryTypeHandler = arg => {
        this.setState( {
            radio: arg
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        alert(this.state);
        <Fetch/>
        console.log(this.state);
        return true;
    };

    render() {
        return (
            <form onSubmit={(e) => {this.handleSubmit(e)}}>

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

                <RadioButton radio={this.state.radio} fieldName={"DeliveryType"} handler={this.deliveryTypeHandler.bind(this)} />
                <button type="submit" disabled={this.state.disabled} >Submit </button>
            </form >
        )
    }
}

const Fetch = () => {
    useEffect(() => {
        /* const url = "https://api.adviceslip.com/advice"
 
         const fetchData = async () => {
             try {
               const response = await fetch(url);
               const json = await response.json();
               console.log(json);
             } catch (error) {
               console.log("error", error);
             }
           };
       
           fetchData();
 */
           const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "clientName": "John Smith",
                "from": {
                    "latitude": 1,
                    "longitude": 2,
                    "addressName": "Mladost 5, Sofia"
                },
                "to": {
                    "latitude": 4,
                    "longitude": 5,
                    "addressName": "Mladost 1, Sofia"
                },
                "clientEmail": "jsmith@mail.bg",
                "phoneNumber": "0894546512",
                "length": 5,
                "depth": 2,
                "height": 3,
                "weight": 9,
                "tags": [
                    "DANGEROUS",
                    "FRAGILE"
                ],
                "deliveryType": "STANDARD"
            }

        };
        fetch('https://localhost:8080/orders', requestOptions)
            .then(response => response.json());
        //.then(data => setPostId(data.id));
    }, []);

    return <div></div>;
};

export default OrderSubmitForm

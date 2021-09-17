import React, { useEffect } from "react";
import TextClass from "./TextClass";
import Error from "./Error"
import RadioButton from "./RadioButton"
import validator from 'validator';
// import CheckBox from "./CheckBox";

class OrderSubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            fromLatitude: "0.0",
            fromLongitude: "0.0",
            fromAddressName: "",
            toLatitude: "0.0",
            toLongitude: "0.0",
            toAddressName: "",
            length: "0",
            height: "0",
            width: "0",
            weight: "0",
            nameError: "",
            emailError: "",
            phoneError: "",
            fromLatitudeError: "",
            fromLongitudeError: "",
            fromAddressNameError: "",
            toLatitudeError: "",
            toLongitudeError: "",
            toAddressNameError: "",
            lengthError: "",
            heightError: "",
            widthError: "",
            weightError: "",
            isValid: false,
            disabled: true,
            tags: [
                {
                    name: 'fragile'
                },
                {
                    name: 'dangerous'
                }
            ],
            selected: [],
            radio: "standard"
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.phoneHandler = this.phoneHandler.bind(this);

        this.fromLatitudeHandler = this.fromLatitudeHandler.bind(this);
        this.fromLongitudeHandler = this.fromLongitudeHandler.bind(this);
        this.fromAddressNameHandler = this.fromAddressNameHandler.bind(this);

        this.toLatitudeHandler = this.toLatitudeHandler.bind(this);
        this.toLongitudeHandler = this.toLongitudeHandler.bind(this);
        this.toAddressNameHandler = this.toAddressNameHandler.bind(this);

        this.lengthHandler = this.lengthHandler.bind(this);
        this.heightHandler = this.heightHandler.bind(this);
        this.widthHandler = this.widthHandler.bind(this);
        this.weightHandler = this.weightHandler.bind(this);

        this.deliveryTypeHandler = this.deliveryTypeHandler.bind(this)

        this.tagsHandler = this.tagsHandler.bind(this);
    }

    validate = () => {
        this.setState({ isValid: true, disabled: false });

        let nameError = "";
        let emailError = "";
        let phoneError = "";
        let fromLatitudeError = "";
        let fromLongitudeError = "";
        let fromAddressNameError = "";
        let toLatitudeError = "";
        let toLongitudeError = "";
        let toAddressNameError = "";
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

        if (!validator.isNumeric(this.state.fromLatitude)) {
            fromLatitudeError = "invalid latitude";
        }

        if (!validator.isNumeric(this.state.fromLongitude)) {
            fromLongitudeError = "invalid longitude";
        }

        if (!/^[A-Za-z0-9 ]+$/.test(this.state.fromAddressName)) {
            fromAddressNameError = "invalid address name";
        }

        if (!validator.isNumeric(this.state.toLatitude)) {
            toLatitudeError = "invalid latitude";
        }

        if (!validator.isNumeric(this.state.toLongitude)) {
            toLongitudeError = "invalid longitude";
        }

        if (!/^[A-Za-z0-9 ]+$/.test(this.state.toAddressName)) {
            toAddressNameError = "invalid address name";
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
        this.setState({ fromLatitudeError: fromLatitudeError });
        this.setState({ fromLongitudeError: fromLongitudeError });
        this.setState({ fromAddressNameError: fromAddressNameError });
        this.setState({ toLatitudeError: toLatitudeError });
        this.setState({ toLongitudeError: toLongitudeError });
        this.setState({ toAddressNameError: toAddressNameError });
        this.setState({ lengthError: lengthError });
        this.setState({ heightError: heightError });
        this.setState({ widthError: widthError });
        this.setState({ weightError: weightError });



        this.setState({ isValid: !(nameError || fromLatitudeError || fromLongitudeError || fromAddressNameError || toLatitudeError || toLongitudeError || toAddressNameError || emailError || phoneError || lengthError || heightError || widthError || weightError) });
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


    fromLatitudeHandler = arg => {
        this.setState({
            fromLatitude: arg
        })
        this.validate();
    }

    fromLongitudeHandler = arg => {
        this.setState({
            fromLongitude: arg
        })
        this.validate();
    }

    fromAddressNameHandler = arg => {
        this.setState({
            fromAddressName: arg
        })
        this.validate();
    }

    toLatitudeHandler = arg => {
        this.setState({
            toLatitude: arg
        })
        this.validate();
    }

    toLongitudeHandler = arg => {
        this.setState({
            toLongitude: arg
        })
        this.validate();
    }

    toAddressNameHandler = arg => {
        this.setState({
            toAddressName: arg
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
        this.setState({
            radio: arg
        })
    }


    handleSubmit = event => {
        event.preventDefault();
        alert(this.state);
        console.log(this.state);
        return true;
    };

    tagsHandler(name) {
        let selected = this.state.selected
        let find = selected.indexOf(name)

        if(find > -1) {
            selected.splice(find, 1)
        } else {
            selected.push(name)
        }

        this.setState({ selected })
    }

    render() {
        return (
            <form onSubmit={(e) => { this.handleSubmit(e) }}>

                <TextClass value={this.state.name} fieldName={"name"} handler={this.nameHandler.bind(this)} />
                <Error props={this.state.nameError} />

                <TextClass value={this.state.email} fieldName={"email"} handler={this.emailHandler.bind(this)} />
                <Error props={this.state.emailError} />

                <TextClass value={this.state.phone} fieldName={"phone"} handler={this.phoneHandler.bind(this)} />
                <Error props={this.state.phoneError} />


                <table align="center" border="1">
                    <tr>
                        <td><label type="text">From Address</label></td>
                        <td><label type="text">To Address</label></td>
                    </tr>
                    <tr>
                        <td>
                            <TextClass value={this.state.fromLatitude} fieldName={"latitude"} handler={this.fromLatitudeHandler.bind(this)} />
                            <Error props={this.state.fromLatitudeError} />
                        </td>
                        <td>
                            <TextClass value={this.state.toLatitude} fieldName={"latitude"} handler={this.toLatitudeHandler.bind(this)} />
                            <Error props={this.state.toLatitudeError} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TextClass value={this.state.fromLongitude} fieldName={"longitude"} handler={this.fromLongitudeHandler.bind(this)} />
                            <Error props={this.state.fromLongitudeError} />
                        </td>
                        <td>
                            <TextClass value={this.state.toLongitude} fieldName={"longitude"} handler={this.toLongitudeHandler.bind(this)} />
                            <Error props={this.state.toLongitudeError} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TextClass value={this.state.fromAddressName} fieldName={"address"} handler={this.fromAddressNameHandler.bind(this)} />
                            <Error props={this.state.fromAddressNameError} />
                        </td>
                        <td>
                            <TextClass value={this.state.toAddressName} fieldName={"address"} handler={this.toAddressNameHandler.bind(this)} />
                            <Error props={this.state.toAddressNameError} />
                        </td>
                    </tr>
                </table>


                <TextClass value={this.state.length} fieldName={"length"} handler={this.lengthHandler.bind(this)} />
                <Error props={this.state.lengthError} />

                <TextClass value={this.state.height} fieldName={"height"} handler={this.heightHandler.bind(this)} />
                <Error props={this.state.heightError} />

                <TextClass value={this.state.width} fieldName={"width"} handler={this.widthHandler.bind(this)} />
                <Error props={this.state.widthError} />

                <TextClass value={this.state.weight} fieldName={"weight"} handler={this.weightHandler.bind(this)} />
                <Error props={this.state.weightError} />

                {/*<CheckBox checkbox={this.state.isFragile} fieldName={"Fragile"} handler={this.isFragileHandler.bind(this)} />*/}
                {/*<CheckBox checkbox={this.state.isDangerous} fieldName={"Dangerous"} handler={this.isDangerousHandler.bind(this)} />*/}
                {/*<br/>*/}
                {/*{*/}

                {
                    this.state.tags.map(item => {
                        return (
                            <label key={ item.name }>
                                <input
                                    type="checkbox"
                                    onChange={() => this.tagsHandler(item.name)}
                                    selected={this.state.selected.includes(item.name)}/>
                                <span>{ item.name }</span>
                            </label>
                        )
                    })
                }
                <br/>

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

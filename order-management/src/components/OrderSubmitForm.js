import React, { useEffect } from "react";
import TextClass from "./TextClass";
import Error from "./Error"
import RadioButton from "./RadioButton"
import validator from 'validator';
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { MainContainer } from "./MainContainer";
import { Form } from "./Form";
import { Input } from "./Input";
import Button from "@material-ui/core/Button";
import Table from "./Table";
// import CheckBox from "./CheckBox";


class OrderSubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            fromLatitude: "",
            fromLongitude: "",
            fromAddressName: "",
            toLatitude: "",
            toLongitude: "",
            toAddressName: "",
            length: "",
            height: "",
            width: "",
            weight: "",
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
                    name: 'Fragile'
                },
                {
                    name: 'Dangerous'
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
            nameError = "*Invalid name";
        }

        if (!validator.isEmail(this.state.email)) {
            emailError = "*Invalid email";
        }

        if (!validator.isMobilePhone(this.state.phone)) {
            phoneError = "*Invalid phone number";
        }

        if (!validator.isNumeric(this.state.fromLatitude)) {
            fromLatitudeError = "*Invalid latitude";
        }

        if (!validator.isNumeric(this.state.fromLongitude)) {
            fromLongitudeError = "*Invalid longitude";
        }

        if (!/^[A-Za-z0-9 ]+$/.test(this.state.fromAddressName)) {
            fromAddressNameError = "*Invalid address name";
        }

        if (!validator.isNumeric(this.state.toLatitude)) {
            toLatitudeError = "*Invalid latitude";
        }

        if (!validator.isNumeric(this.state.toLongitude)) {
            toLongitudeError = "*Invalid longitude";
        }

        if (!/^[A-Za-z0-9 ]+$/.test(this.state.toAddressName)) {
            toAddressNameError = "*Invalid address name";
        }

        if (!validator.isNumeric(this.state.length) || this.state.length <= 0) {
            lengthError = "*Invalid length";
        }

        if (!validator.isNumeric(this.state.height) || this.state.height <= 0) {
            heightError = "*Invalid height";
        }

        if (!validator.isNumeric(this.state.width) || this.state.width <= 0) {
            widthError = "*Invalid width";
        }

        if (!validator.isNumeric(this.state.weight) || this.state.weight <= 0) {
            weightError = "*Invalid weight";
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
        // alert(this.state);
        console.log(this.state);
        return true;
    };

    tagsHandler(name) {
        let selected = this.state.selected
        let find = selected.indexOf(name)

        if (find > -1) {
            selected.splice(find, 1)
        } else {
            selected.push(name)
        }

        this.setState({ selected })
    }

    render() {
        return (
            <MainContainer>
                <Typography component="h2" variant="h5">
                </Typography>
                <Form onSubmit={(e) => { this.handleSubmit(e) }}>
                    <h1>ORDER</h1>
                    <TextClass value={this.state.name} fieldName={"Name"} handler={this.nameHandler.bind(this)}
                        id="clientName"
                        type="text"
                    />
                    <Error props={this.state.nameError} />
                    <TextClass value={this.state.email} fieldName={"Email"} handler={this.emailHandler.bind(this)}
                        id="email"
                        type="text"
                    />
                    <Error props={this.state.emailError} />
                    <TextClass value={this.state.phone} fieldName={"Phone"} handler={this.phoneHandler.bind(this)}
                        id="phoneNumber"
                        type="tel"
                    />
                    <Error props={this.state.phoneError} />
                    <hr></hr>
                    <br />
                    <Table fromLantitude={this.state.fromLatitude} fieldFromLantitude={"Latitude"} handlerFromLantitude={this.fromLatitudeHandler.bind(this)} fromLantitudeError={this.state.fromLatitudeError} fromLongitude={this.state.fromLongitude} fieldFromLongitude={"Longitude"} handlerFromLongitude={this.fromLongitudeHandler.bind(this)} fromLongitudeError={this.state.fromLongitudeError} fromAddress={this.state.fromAddressName} fieldFromAddress={"From"} handlerFromAddress={this.fromAddressNameHandler.bind(this)} fromAddressError={this.state.fromAddressNameError} toLantitude={this.state.toLatitude} fieldToLantitude={"Latitude"} handlerToLantitude={this.toLatitudeHandler.bind(this)} toLantitudeError={this.state.toLatitudeError} toLongitude={this.state.toLongitude} fieldToLongitude={"Longitude"} handlerToLongitude={this.toLongitudeHandler.bind(this)} toLongitudeError={this.state.toLongitudeError} toAddress={this.state.toAddressName} fieldToAddress={"To"} handlerToAddress={this.toAddressNameHandler.bind(this)} toAddressError={this.state.toAddressNameError}
                    />
                    <hr></hr>
                    <br />
                    <TextClass value={this.state.length} fieldName={"Length"} handler={this.lengthHandler.bind(this)}
                        label="length"
                        type="text" />
                    <Error props={this.state.lengthError} />

                    <TextClass value={this.state.height} fieldName={"Height"} handler={this.heightHandler.bind(this)}
                        label="height"
                        type="text" />
                    <Error props={this.state.heightError} />

                    <TextClass value={this.state.width} fieldName={"Width"} handler={this.widthHandler.bind(this)} />
                    <Error props={this.state.widthError}
                        label="width"
                        type="text" />

                    <TextClass value={this.state.weight} fieldName={"Weight"} handler={this.weightHandler.bind(this)}
                        label="weigth"
                        type="text" />
                    <Error props={this.state.weightError} />
                    <hr></hr>
                    <br />
                    <section>
                        <label style={{
                            fontSize: "18px"
                        }}>Tags</label>
                        <table style={{
                            margin: "10px 30px 30px 0",
                            background: "#f4f4f4",
                            borderRadius: 5,
                            boxShadow: '0 0px 3px rgba(0,0,0,0.3)',
                            color: '#777',
                            height: "100%",
                            padding: '15px',
                            width: "100%"
                        }}>
                            <tr>
                                <td>
                                    {
                                        this.state.tags.map(item => {
                                            return (
                                                <label>
                                                    <input style={{
                                                        marginLeft: "10%"
                                                    }}
                                                        type="checkbox"
                                                        onChange={() => this.tagsHandler(item.name)}
                                                        selected={this.state.selected.includes(item.name)} />
                                                    <span>{item.name}</span>
                                                </label>
                                            )
                                        })
                                    }
                                </td>
                            </tr>
                        </table>
                    </section>

                    <RadioButton radio={this.state.radio} fieldName={"Delivery Type"} handler={this.deliveryTypeHandler.bind(this)} />
                    <Button type="submit"
                        fullWidth
                        variant="contained"
                        disabled={this.state.disabled}
                        style={{
                            background:"#0e0e0e",
                            borderRadius: 5,
                            boxShadow: '0 0px 5px rgba(0,0,0,0.3)',
                            height: "100%",
                            marginTop: '20px',
                            padding: "10px",
                            fontSize: "18px",
                            width: "100%",
                            color:"#f5f5f5"
                        }}>
                        Complete
                    </Button>
                </Form>
                <script src="success.js"></script>
            </MainContainer>
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

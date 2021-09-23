import React from "react";
import TextClass from "./TextClass";
import Error from "./Error"
import RadioButton from "./RadioButton"
import validator from 'validator';
import Swal from 'sweetalert2'
import Typography from "@material-ui/core/Typography";
import {MainContainer} from "./MainContainer";
import {Form} from "./Form";
import Button from "@material-ui/core/Button";
import Table from "./Table";
import Geocoder from 'react-native-geocoding';
import {Map, LoadMap} from "./Map";

Geocoder.init("AIzaSyCjTOWTvU-3_qpW12GHY0V35EHcSzoPTIM");

class OrderSubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            fromLatitude: 0,
            fromLongitude: 0,
            fromAddressName: "",
            toLatitude: 0,
            toLongitude: 0,
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
            showMap: false,
            showToMap: false,
            showFromMap: false,
            isValid: false,
            disabled: true,
            tags: [
                {
                    name: 'FRAGILE'
                },
                {
                    name: 'DANGEROUS'
                }
            ],
            selected: [],
            radio: "standard",
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

        this.toHandler = this.toHandler.bind(this);
        this.fromHandler = this.fromHandler.bind(this);
    }

    validate = () => {
        this.setState({isValid: true, disabled: false});

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

        if (!/^[A-Za-z0-9 ]+$/.test(this.state.fromAddressName)) {
            fromAddressNameError = "*Invalid address name";
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

        this.setState({nameError: nameError});
        this.setState({emailError: emailError});
        this.setState({phoneError: phoneError});
        this.setState({fromLatitudeError: fromLatitudeError});
        this.setState({fromLongitudeError: fromLongitudeError});
        this.setState({fromAddressNameError: fromAddressNameError});
        this.setState({toLatitudeError: toLatitudeError});
        this.setState({toLongitudeError: toLongitudeError});
        this.setState({toAddressNameError: toAddressNameError});
        this.setState({lengthError: lengthError});
        this.setState({heightError: heightError});
        this.setState({widthError: widthError});
        this.setState({weightError: weightError});

        this.setState({isValid: !(nameError || fromAddressNameError || toAddressNameError || emailError || phoneError || lengthError || heightError || widthError || weightError)});
        this.setState({disabled: !this.state.isValid});
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
        this.setState({showFromMap: true});
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
        this.setState({showToMap: true});
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

    toHandler(address, lat, lng) {
        this.toAddressNameHandler(address);
        this.toLatitudeHandler(lat);
        this.toLongitudeHandler(lng);

    }

    fromHandler(address, lat, lng) {
        this.fromAddressNameHandler(address);
        this.fromLatitudeHandler(lat);
        this.fromLongitudeHandler(lng);

    }

    handleSubmit = event => {
        event.preventDefault();

        let orderInfo = {
            clientName: this.state.name,
            from: {
                latitude: this.state.fromLatitude,
                longitude: this.state.fromLongitude,
                addressName: this.state.fromAddressName
            },
            to: {
                latitude: this.state.toLatitude,
                longitude: this.state.toLongitude,
                addressName: this.state.toAddressName
            },
            clientEmail: this.state.email,
            phoneNumber: this.state.phone,
            length: this.state.length,
            width: this.state.width,
            height: this.state.height,
            weight: this.state.weight,
            tags: this.state.selected,
            deliveryType: this.state.radio.toUpperCase()
        }


        let result = {
            "Client name": this.state.name,
            "Client email": this.state.email,
            "Phone number": this.state.phone,
            "From": this.state.fromAddressName,
            "To": this.state.toAddressName,
            "Length": this.state.length,
            "Width": this.state.width,
            "Height": this.state.height,
            "Weight": this.state.weight,
            "Tags": this.state.selected,
            "Delivery type": this.state.radio.toUpperCase()
        }


        fetch('http://localhost:8080/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderInfo),
        }).then(r => {
            Swal.fire({
                title: 'Your order was created!',
                text: 'Thank you for choosing Uber!',
                icon: 'success',
                showCancelButton: true,
                cancelButtonText: 'See order info',
                confirmButtonColor: '#000000',
                reverseButtons: true,
            }).then(value => {
                if (value.isDismissed) {
                    Swal.fire({
                        title: displayOrderInfo(result),
                        icon: 'info',
                        iconColor: '#000000',
                        confirmButtonColor: '#000000',
                        width: '800px',
                    })
                }
            })
        }).catch(error => Swal.fire({
            title: 'We\'re sorry!',
            text: 'There\'s a problem with your order!',
            icon: 'error',
            confirmButtonColor: '#000000',
        }));
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

        this.setState({selected})
    }

    render() {
        return (
            <MainContainer>
                <Typography component="h2" variant="h5">
                </Typography>
                <Form onSubmit={(e) => {
                    this.handleSubmit(e)
                }}>
                    <h1>ORDER</h1>
                    <TextClass value={this.state.name} fieldName={"Name"} handler={this.nameHandler.bind(this)}
                               id="clientName"
                               type="text"
                    />
                    <Error props={this.state.nameError}/>
                    <TextClass value={this.state.email} fieldName={"Email"} handler={this.emailHandler.bind(this)}
                               id="email"
                               type="text"
                    />
                    <Error props={this.state.emailError}/>
                    <TextClass value={this.state.phone} fieldName={"Phone"} handler={this.phoneHandler.bind(this)}
                               id="phoneNumber"
                               type="tel"
                    />
                    <Error props={this.state.phoneError}/>
                    <hr></hr>
                    <br/>
                    <TextClass value={this.state.fromAddressName} fieldName={"From address"} handler={(event) => {
                        this.fromAddressNameHandler(event);
                        Geocoder.from(event)
                            .then(json => {
                                var location = json.results[0].geometry.location;

                                this.setState({fromLatitude: location.lat, fromLongitude: location.lng});

                            })
                            .catch(error => {
                                console.warn(error)
                            });

                    }}/>

                    <TextClass value={this.state.toAddressName} fieldName={"To address"} handler={(event) => {
                        this.toAddressNameHandler(event);
                        Geocoder.from(event)
                            .then(json => {
                                var location = json.results[0].geometry.location;

                                this.setState({toLatitude: location.lat, toLongitude: location.lng});

                            }).catch(error => console.warn(error));

                    }}/>

                    <Button type="button"
                            fullWidth
                            variant="contained"
                            disabled={!(this.state.showFromMap && this.state.showToMap)}
                            onClick={() => this.setState({
                                showMap: true,
                                showFromMap: false,
                                showToMap: false
                            })}
                            style={{
                                background: "#0e0e0e",
                                borderRadius: 5,
                                boxShadow: '0 0px 5px rgba(0,0,0,0.3)',
                                height: "100%",
                                marginTop: '20px',
                                marginBottom: '20px',
                                padding: "10px",
                                fontSize: "18px",
                                width: "25%",
                                color: "#f5f5f5"
                            }}>
                        Load map
                    </Button>
                    <LoadMap showMap={this.state.showMap} fromAddress={this.state.fromAddressName}
                             toAddress={this.state.toAddressName} fromLat={this.state.fromLatitude}
                             fromLng={this.state.fromLongitude} toLat={this.state.toLatitude}
                             toLng={this.state.toLongitude}/>

                    <hr></hr>


                    <br/>
                    <TextClass value={this.state.length} fieldName={"Length"} handler={this.lengthHandler.bind(this)}
                               label="length"
                               type="text"/>
                    <Error props={this.state.lengthError}/>

                    <TextClass value={this.state.height} fieldName={"Height"} handler={this.heightHandler.bind(this)}
                               label="height"
                               type="text"/>
                    <Error props={this.state.heightError}/>

                    <TextClass value={this.state.width} fieldName={"Width"} handler={this.widthHandler.bind(this)}/>
                    <Error props={this.state.widthError}
                           label="width"
                           type="text"/>

                    <TextClass value={this.state.weight} fieldName={"Weight"} handler={this.weightHandler.bind(this)}
                               label="weight"
                               type="text"/>
                    <Error props={this.state.weightError}/>
                    <hr></hr>
                    <br/>
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
                                                           selected={this.state.selected.includes(item.name)}/>
                                                    <span>{item.name}</span>
                                                </label>
                                            )
                                        })
                                    }
                                </td>
                            </tr>
                        </table>
                    </section>

                    <RadioButton radio={this.state.radio} fieldName={"Delivery Type"}
                                 handler={this.deliveryTypeHandler.bind(this)}/>
                    <Button type="submit"
                            fullWidth
                            variant="contained"
                            disabled={this.state.disabled}
                            style={{
                                background: "#0e0e0e",
                                borderRadius: 5,
                                boxShadow: '0 0px 5px rgba(0,0,0,0.3)',
                                height: "100%",
                                marginTop: '20px',
                                padding: "10px",
                                fontSize: "18px",
                                width: "100%",
                                color: "#f5f5f5"
                            }}>
                        Complete
                    </Button>
                </Form>
            </MainContainer>
        )
    }
}

function displayOrderInfo(info) {
    return JSON.stringify(info).replaceAll("\"", "").replaceAll("}", "").replaceAll("{", "").replaceAll(",", "\n");
}


export default OrderSubmitForm

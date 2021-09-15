import React from "react";
//import { TextField } from "./TextField";
import TextClass from "./TextClass";

class Combine extends React.Component {
    state = {
        email: "",
        phone: ""
    }


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
        console.log(this.state);

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               
                <TextClass  {.../*"name"*/ str => {
                    return (str.includes('@'));
                }
                } />
                <input type="submit" />
            </form>
        )
    }
}

/*class Name extends React.Component {
    state = {
        fieldName: "name",
        validate: (str) => {
            return (str.includes('@'));
        }
    }
}*/
export default Combine
 /*<TextField  {...str => {
                    return (str.includes('@'));
                }
                } />*/
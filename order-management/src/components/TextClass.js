import React from 'react';

class TextClass extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            value: "",
            valueError: "",
            isValid: true,
            validate: props
        }
    }

 changeHandler = event => {
    let valueError = "";
    //this.setState({ value: "12" });
    if (this.isValid) {
        this.setState({ ...this.state, [event.target.name]: event.target.value })
    }
    else {
        valueError = "invalid"
    }
    this.setState({ valueError });
}

render(){
    return (
        <form >
            <label>

                <input
                    type="text"
                    value={this.value}
                    onChange={this.changeHandler}
                //name="${fieldName}"
                //placeholder="${fieldName}"
                />
                <div style={{ fontSize: 12, color: 'red' }}>{this.state.valueError}</div>
            </label>

        </form>
    )
}
}
export default TextClass  /*${fieldName}*/
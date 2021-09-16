import React from 'react';

function TextClass({/*value,*/ fieldName, onChange}) {

    //function changeHandler = event => {
    // let valueError = "";
    // this.setState({[this.isValid]: this.validate(event.target.value)});
    // if (this.isValid) {
    //     this.setState({ ...this.state, [event.target.name]: event.target.value })
    //     this.props.parentCallback(this.value);
    //     event.preventDefault();
    // }
    // else {
    //     valueError = "invalid"
    // }
    // this.setState({ valueError });

    // }
    var newValue="";
    var handleChange = (event) => {
        newValue = event.target.value;
        onChange(newValue);
        //value=newValue;
    }

    return (
        <label>

            <input
                type="text"
                //value={value}
                onChange={handleChange}
                name={fieldName}
            //placeholder="${fieldName}"
            />
        </label>//,
        //{newValue}
    )

}
export default TextClass  /*${fieldName}*/
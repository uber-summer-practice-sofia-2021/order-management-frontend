import React from 'react';

class NameField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstName: "", lastName: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, field) {
        this.setState({ [field]: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.firstName + " " + this.state.lastName);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChange(event, "firstName")} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChange(event, "lastName")} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameField;
import React from 'react';

function TextClass({value, fieldName, handler }) {

    return (
        <label>

            <input
                type="text"
                defaultValue={value}
                onChange={(event) => {
                    const newValue = event.target.value;
                    handler(newValue)
                }}
                name={fieldName}

            />
        </label>
    )

}
export default TextClass
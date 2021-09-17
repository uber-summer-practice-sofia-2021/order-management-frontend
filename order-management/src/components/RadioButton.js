import React from 'react';

function RadioButton({ radio, fieldName, handler }) {

    return (
        <label>
            {fieldName}
            <br/>
            <input
                type="radio"
                checked={radio === "standard"}
                value="standard"
                name={fieldName}
                onChange={(e) => {
                    const newValue = e.target.value
                    handler(newValue)
                }}
            />
            Standard
            <input
                type="radio"
                checked={radio === "express"}
                value="express"
                name={fieldName}
                onChange={(e) => {
                    const newValue = e.target.value
                    handler(newValue)
                }}
            />
            Express
            <br/>
        </label>

    )

}
export default RadioButton
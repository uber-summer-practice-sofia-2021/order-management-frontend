import React from 'react';
import { Input } from "./Input";

function TextClass({ value, fieldName, handler }) {

    return (
            <Input
                label={fieldName}
                defaultValue={value}
                onChange={(event) => {
                    const newValue = event.target.value;
                    handler(newValue)
                }}
                name={fieldName}
            />
    )

}
export default TextClass
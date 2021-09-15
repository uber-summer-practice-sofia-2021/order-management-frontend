import React, { useState } from 'react';

/*export function TextField(props) {
  const { validate } = props;
  //const {  fieldName }=props.fieldName;
  const [allValues, setAllValues] = useState({
    value: '',
    valueError: '',
    isValid: true,
  });

  const changeHandler = event => {
    let valueError = "";
   // setAllValues( {...allValues,   allValues.isValid : validate(allValues.value)} );
    if (allValues.isValid) {
      setAllValues({ ...allValues, [event.target.name]: event.target.value })
    }
    else {
      valueError = "invalid ${fieldName}"
    }
    setAllValues({ valueError });

  }

  return (
    <form >
      <label>

        <input
          type="text"
          value={allValues.value}
          onChange={changeHandler()}
        //name="${fieldName}"
        //placeholder="${fieldName}"
        />
        <div style={{ fontSize: 12, color: 'red' }}>{this.state.valueError}</div>
      </label>

    </form>
  );
}  /*${fieldName}*/
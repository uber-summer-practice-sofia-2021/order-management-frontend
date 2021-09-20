import React from 'react';

function RadioButton({ radio, fieldName, handler }) {

    return (
        <section>
            <label style={{
                fontSize: "18px"
            }}>{fieldName}</label>
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
                        <label>Standard</label>
                        <input style={{
                            marginLeft: "5%"
                        }}
                            type="radio"
                            checked={radio === "express"}
                            value="express"
                            name={fieldName}
                            onChange={(e) => {
                                const newValue = e.target.value
                                handler(newValue)
                            }}
                        />
                        <label>Express</label>
                    </td>
                </tr>
            </table>
        </section>
    )

}
export default RadioButton
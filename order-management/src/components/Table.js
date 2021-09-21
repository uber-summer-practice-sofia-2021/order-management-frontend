import React from 'react';
import TextClass from "./TextClass";
import Error from "./Error"

function Table({ fromLantitude, fieldFromLantitude, handlerFromLantitude, fromLantitudeError, fromLongitude, fieldFromLongitude, handlerFromLongitude, fromLongitudeError, fromAddress, fieldFromAddress, handlerFromAddress, fromAddressError, toLantitude, fieldToLantitude, handlerToLantitude, toLantitudeError, toLongitude, fieldToLongitude, handlerToLongitude, toLongitudeError, toAddress, fieldToAddress, handlerToAddress, toAddressError }) {

    return (
        <table style={{width: "100%"}}>
            <tr>
                <td style={{
                    padding: "10px"
                }}>
                    <label style={{
                        fontSize: "18px",
                    }} type="text">
                        From Address
                    </label>
                </td>
                <td style={{
                    padding: "10px"
                }}>
                    <label style={{
                        fontSize: "18px"
                    }} type="text">
                        To Address
                    </label>
                </td>
            </tr>
            <tr>
                <td>
                    <TextClass value={fromLantitude} fieldName={fieldFromLantitude} handler={handlerFromLantitude}
                        id="fromLantitude"
                        type="text"
                    />
                    <Error props={fromLantitudeError} />
                </td>
                <td>
                    <TextClass value={toLantitude} fieldName={fieldToLantitude} handler={handlerToLantitude}
                        id="fromLantitude"
                        type="text"
                    />
                    <Error props={toLantitudeError} />
                </td>
            </tr>
            <tr>
                <td>
                    <TextClass value={fromLongitude} fieldName={fieldFromLongitude} handler={handlerFromLongitude}
                        id="fromLantitude"
                        type="text"
                    />
                    <Error props={fromLongitudeError} />
                </td>
                <td>
                    <TextClass value={toLongitude} fieldName={fieldToLongitude} handler={handlerToLongitude}
                        id="fromLantitude"
                        type="text"
                    />
                    <Error props={toLongitudeError} />
                </td>
            </tr>
            <tr>
                <td>
                    <TextClass value={fromAddress} fieldName={fieldFromAddress} handler={handlerFromAddress}
                        id="fromLantitude"
                        type="text"
                    />
                    <Error props={fromAddressError} />
                </td>
                <td>
                    <TextClass value={toAddress} fieldName={fieldToAddress} handler={handlerToAddress}
                        id="fromLantitude"
                        type="text"
                    />
                    <Error props={toAddressError} />
                </td>
            </tr>
        </table>
    )

}
export default Table
import React from "react";


export default function Error({ props }) {
    return (
      <div style={{     
        position:"absolute",
        fontSize:"12px",
        fontFamily: "inherit",
        fontStyle: "oblique",
        marginTop:"-30px",
        marginBottom:"0px",
        color:"#e74c3c", }}>{props}</div>

    )
}
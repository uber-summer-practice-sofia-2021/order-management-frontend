import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";

export const Input = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      inputRef={ref}
      fullWidth
      style={{     
        marginBottom:"35px"}}
      {...props}
    />
  );
});
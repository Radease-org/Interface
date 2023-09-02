import React from "react";
//components
import { TextField } from "@mui/material";

const AppInput = props => {
  const { name, onChange, label, value = "", ...otherProps } = props;
  return (
    <TextField
      id={name}
      name={name}
      label={label}
      variant="outlined"
      className="w-full"
      value={value}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default AppInput;

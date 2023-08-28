import React from "react";
//components
import { TextField } from "@mui/material";

const AppInput = (props) => {
  const { name, onChange, label } = props;
  return (
    <TextField
      id={name}
      name={name}
      label={label}
      variant="outlined"
      className="w-full"
      sx={{
        "& .MuiOutlinedInput-root": {
          fontSize: 14,
          borderRadius: "4px",
          color: "#475569",
        },
        "& .MuiFormLabel-root": {
          color: "#475569",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "1.2px solid #CBD5E1",
        },
        "& .Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1.2px solid #CBD5E1",
          },
        },
      }}
      onChange={(e) => console.log(e.target.value)}
    />
  );
};

export default AppInput;

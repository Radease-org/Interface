import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";

const AppSelect = (props) => {
  const { label, options, name } = props;
  return (
    <TextField
      id={name}
      select
      label={label}
      defaultValue=""
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
      SelectProps={{ IconComponent: MdKeyboardArrowDown }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default AppSelect;

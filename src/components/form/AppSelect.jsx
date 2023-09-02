import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";

const AppSelect = props => {
  const { label, options, name, onChange } = props;
  return (
    <FormControl className="w-full">
      <InputLabel>{label}</InputLabel>
      <Select
        id={name}
        name={name}
        label={label}
        defaultValue=""
        IconComponent={MdKeyboardArrowDown}
        onChange={onChange}
        MenuProps={{
          sx: {
            "& .MuiPaper-root": {
              maxHeight: 200
            }
          }
        }}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AppSelect;

import { FormControl, TextField } from "@mui/material";
import React from "react";

export function TextInput({
  label,
  value,
  onChange,
  key,
  name,
  sx,
  required,
  type = "text",
  // refInput,
  // error,
  // helperText,
}) {
  return (
    <FormControl fullWidth>
      <TextField
        type={type}
        label={label}
        value={value}
        onChange={onChange}
        key={key}
        name={name}
        sx={sx}
        required={required}
        // inputRef={refInput}
        // error={error}
        // helperText={helperText}
      />
    </FormControl>
  );
}

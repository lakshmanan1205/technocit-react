import { FormControl, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import ShowIcon from "@mui/icons-material/Visibility";
import HideIcon from "@mui/icons-material/VisibilityOff";

export function PasswordInput({ label, value, onChange, key, name, sx }) {
  const [isPassword, setIsPassword] = useState(true);
  return (
    <FormControl fullWidth sx={{ position: "relative" }}>
      <TextField
        type={isPassword ? "password" : "text"}
        label={label}
        value={value}
        onChange={onChange}
        key={key}
        name={name}
        sx={sx}
      />
      <IconButton
        onClick={() => setIsPassword((password) => !password)}
        sx={{ position: "absolute", top: "5px", right: "0px" }}
      >
        {isPassword ? <HideIcon /> : <ShowIcon />}
      </IconButton>
    </FormControl>
  );
}

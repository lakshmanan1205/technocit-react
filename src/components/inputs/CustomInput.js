import { FormControl, Grid, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import { useController } from "react-hook-form";
import ShowIcon from "@mui/icons-material/Visibility";
import HideIcon from "@mui/icons-material/VisibilityOff";
// const defaultValue = { email: "" };
// const rules = {
//   required: "Email is required",
//   pattern: {
//     value: /\S+@\S+\.\S+/,
//     message: "Enter valid email address",
//   },
// };
// const rules = {
//   required: "Password is required",
//   minLength: { value: 8, message: "Minimum 8 charactors only" },
//   maxLength: { value: 16, message: "Maximum 16 charactors only" },
// };

export function CustomInput({
  control,
  label,
  name,
  type,
  defaultValue,
  rules,
  minValue = 0,
  sizeMobile = 12,
  sizeTab = 12,
  sizeDesktop = 12,
  xs = 12,
  sm = 12,
  md = 6,
  lg = 6,
}) {
  //   const sri = useController({ name, control, defaultValue, rules });
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
    // RULE_PASSWORD,
  });
  const [isPassword, setIsPassword] = useState(true);
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg}>
      <FormControl fullWidth sx={{ position: "relative" }}>
        <TextField
          label={label}
          type={type === "password" && !isPassword ? "text" : type}
          InputLabelProps={{ shrink: !defaultValue }}
          inputProps={{ min: minValue }}
          // type={type}
          {...inputProps}
          inputRef={ref}
          error={invalid}
          defaultValue={defaultValue}
          helperText={error?.message}
        />
        {type === "password" && (
          <IconButton
            onClick={() => setIsPassword((password) => !password)}
            sx={{ position: "absolute", top: "5px", right: "0px" }}
          >
            {isPassword ? <HideIcon /> : <ShowIcon />}
          </IconButton>
        )}
      </FormControl>
    </Grid>
  );
}

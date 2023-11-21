import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthenticContext";
import { LoadingButton } from "../../components/buttons/LoadingButton";
import { CustomInput } from "../../components/inputs/CustomInput";
import { createUser } from "../../services/services";
import { INDEX, SIGNIN } from "../../utils/routeNames";
import {
  RULE_DOB,
  RULE_EMAIL,
  RULE_EXPERIENCE,
  RULE_MACHINE_ID,
  RULE_MOBILE,
  RULE_NAME,
  RULE_PASSWORD,
  RULE_ROLE,
  RULE_SPORT_ID,
} from "../../utils/formValidationRules";

export default function SignUp() {
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      role: "",
      mobile: "",
      dob: "",
      sportID: "",
      machineID: "",
      experience: "",
    },
  });
  const { handleSubmit, control, getValues } = form;
  const [signUpData, setSignUpData] = useState({
    isLoading: false,
  });
  const onSubmitData = (data) => {
    setSignUpData((prevData) => ({ ...prevData, isLoading: true }));
    if (signUpData.isLoading) return;
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      mobile: data.mobile,
      dob: data.dob,
      sportID: Number(data.sportID),
      machineId: data.machineID,
      yearsOfExp: Number(data.experience),
    };
    createUser(formData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("User Created Successfully ");
          const userData = res?.data;
          logIn(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          navigate(INDEX);
        }
      })
      .catch((err) => {
        console.error("sign-up", err);
        setSignUpData((prevData) => ({ ...prevData, isLoading: false }));
        toast.error("Something went wrong! Please try again");
      });
  };
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
      </Box>
      <Box sx={{ mt: 1 }}>
        <form onSubmit={handleSubmit(onSubmitData)} noValidate>
          <Grid container spacing={2}>
            <CustomInput
              control={control}
              label="Name"
              type="text"
              name="name"
              rules={RULE_NAME}
              defaultValues={{ name: "" }}
            />
            <CustomInput
              control={control}
              label="Email"
              type="email"
              name="email"
              rules={RULE_EMAIL}
              defaultValues={{ email: "" }}
            />
            <CustomInput
              control={control}
              label="Password"
              type="password"
              name="password"
              rules={RULE_PASSWORD}
              defaultValues={{ password: "" }}
            />

            <CustomInput
              control={control}
              label="Confirm Password"
              type="password"
              name="cpassword"
              rules={{
                required: "Confirm your Password",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              }}
              defaultValues={{ cpassword: "" }}
            />

            <CustomInput
              control={control}
              label="Role"
              type="text"
              name="role"
              rules={RULE_ROLE}
              defaultValues={{ role: "" }}
            />

            <CustomInput
              control={control}
              label="Mobile Number"
              type="number"
              name="mobile"
              rules={RULE_MOBILE}
              defaultValues={{ mobile: "" }}
            />

            <CustomInput
              control={control}
              label="Date-of-birth"
              type="date"
              name="dob"
              rules={RULE_DOB}
              defaultValues={{ dob: "" }}
            />

            <CustomInput
              control={control}
              label="Sport ID"
              type="number"
              name="sportID"
              rules={RULE_SPORT_ID}
              defaultValues={{ sportID: "" }}
            />

            <CustomInput
              control={control}
              label="Machine ID"
              type="text"
              name="machineID"
              rules={RULE_MACHINE_ID}
              defaultValues={{ machineID: "" }}
            />

            <CustomInput
              control={control}
              label="Years-of-Experience"
              type="number"
              name="experience"
              rules={RULE_EXPERIENCE}
              defaultValues={{ experience: "" }}
            />
          </Grid>
          <Grid
            container
            // rowSpacing={2}
            // columnSpacing={2}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <Grid item xs={12} sm={12} md={6}>
              <LoadingButton
                type="submit"
                isLoading={signUpData.isLoading}
                fullWidth
              >
                Sign Up
              </LoadingButton>
              <Box sx={{ mt: 1, mb: 1 }}>
                <Typography variant="caption">Already a User?</Typography>
                <Button onClick={() => navigate(SIGNIN)}>sign In</Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

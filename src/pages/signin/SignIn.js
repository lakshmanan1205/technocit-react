import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LoadingButton } from "../../components/buttons/LoadingButton";
import { CustomInput } from "../../components/inputs/CustomInput";
import { RULE_EMAIL, RULE_PASSWORD } from "../../utils/formValidationRules";
import { signinUser } from "../../services/services";
import { useAuth } from "../../context/AuthenticContext";
import { INDEX, SIGNUP } from "../../utils/routeNames";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";

export default function SignIn() {
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const form = useForm({
    defaultValues: { email: "", password: "" },
  });
  const { handleSubmit, control } = form;
  const [signInData, setSignInData] = useState({
    isLoading: false,
  });
  const onSubmitData = (data) => {
    setSignInData((prevData) => ({ ...prevData, isLoading: true }));
    if (signInData.isLoading) return;
    const formData = {
      email: data.email,
      password: data.password,
    };
    signinUser(formData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("User logged-in Successfully ");
          const userData = res.data;
          localStorage.setItem("user", JSON.stringify(userData));
          logIn(userData);
          navigate(INDEX);
        }
      })
      .catch((err) => {
        console.error("sign-up", err?.response?.data);
        setSignInData((prevData) => ({ ...prevData, isLoading: false }));
        toast.error(err?.response?.data);
      });
  };
  return (
    <Container component="main" maxWidth="xs">
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
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <form onSubmit={handleSubmit(onSubmitData)} noValidate>
            <Grid
              container
              spacing={2}
              // rowSpacing={2.5}
              // columnSpacing={{ xs: 2, sm: 2, md: 2 }}
            >
              <CustomInput
                control={control}
                label="Email"
                type="email"
                name="email"
                rules={RULE_EMAIL}
                defaultValues={{ email: "" }}
                sm={12}
                md={12}
                lg={12}
              />
              <CustomInput
                control={control}
                label="Password"
                type="password"
                name="password"
                rules={RULE_PASSWORD}
                defaultValues={{ password: "" }}
                sm={12}
                md={12}
                lg={12}
              />
              <Grid item xs={12} sm={12}>
                <LoadingButton
                  type="submit"
                  isLoading={signInData.isLoading}
                  fullWidth
                >
                  Sign In
                </LoadingButton>
              </Grid>
              <Grid item>
                <Button onClick={() => navigate(SIGNUP)}>
                  <Typography
                    variant="caption"
                    color="info"
                    fontSize={14}
                    sx={{ textTransform: "capitalize" }}
                  >
                    Don't have an account? Sign Up
                  </Typography>
                  {/* {"Don't have an account? Sign Up"} */}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Container>
  );
}

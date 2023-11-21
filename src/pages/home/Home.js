import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../../context/AuthenticContext";

export default function Home() {
  const { user, logOut } = useAuth();
  return (
    <Container>
      <Paper sx={{ minHeight: "100px", paddingTop: "50px" }}>
        <Typography variant="h4" textAlign="center">
          {`Welcome Back ${user?.name}!`}
        </Typography>
        <Box sx={{ margin: "1rem 0" }}>
          <Grid
            padding={2}
            container
            rowSpacing={2.5}
            columnSpacing={{ xs: 2, sm: 2, md: 2 }}
            justifyContent="center"
          >
            <Grid item sm={4}>
              <Button
                onClick={() => logOut()}
                color="primary"
                variant="contained"
                fullWidth
              >
                Sign Out
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

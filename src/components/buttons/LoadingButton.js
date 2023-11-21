import { Box, Button, CircularProgress, Stack } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export const LoadingButton = ({
  isLoading,
  handleSubmit,
  type = "button",
  color = "primary",
  style,
  fullWidth,
  children,
}) => (
  <Button
    variant="contained"
    onClick={handleSubmit}
    type={type}
    color={color}
    sx={style}
    fullWidth={fullWidth}
  >
    <Stack spacing={2} direction="row" alignContent="center">
      <Box>
        {/* <Typography variant="h6">{label}</Typography> */}
        {children}
      </Box>
      <Box sx={{ lineHeight: 0 }}>
        {isLoading ? (
          <CircularProgress color="success" size={24} />
        ) : (
          <EastIcon />
        )}
      </Box>
    </Stack>
  </Button>
);

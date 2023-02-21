import React from "react";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import GoogleIcon from "../assets/icons/icon_google.png";


import { colors } from "../utils/theme/colors";

const LoginForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "20px",
        border: "1px solid #EDEDED",
        p: "32px 48px",
      }}
    >
      <Stack direction="column" justifyContent="space-between">
        <Stack direction="column">
          <Typography variant="h4" fontWeight="bold" color={colors.kBlackColor}>
            Login
          </Typography>
          <Typography variant="body1" color={colors.kGreyColor}>
            Get access to your Orders, Wishlist and Recommendations
          </Typography>
          <TextField
            variant="outlined"
            label="Enter Email/Mobile Number"
            fullWidth
          />
          <Button variant="contained" autoCapitalize="false">
            <Typography variant="body1">Request OTP</Typography>
          </Button>
          <Typography variant="caption" textAlign="center">
            Or
          </Typography>
          <Button variant="outlined" autoCapitalize="false">
            <img src={GoogleIcon} alt="google-icon" />
            <Typography variant="body1">Continue with Google</Typography>
          </Button>
        </Stack>
        <Stack direction="column">
          <Typography variant="body2">
            By continuing, you agree to Flipkart's Terms of Use and Privacy
            Policy.
          </Typography>
          <Typography variant="body2">
            New to Smart Shopping? Create an account
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LoginForm;

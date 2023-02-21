import React from "react";

import { Box, Stack, Typography, TextField, Button } from "@mui/material";

import LogoImage from "./assets/images/logo.svg";
import CartImage from "./assets/images/login.svg";
import LoginForm from "./components/LoginForm";


const App = () => {
  return (
    <Box p="48px 60px">
   
        <img src={LogoImage} alt="Logo" width="140px" />
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <img src={CartImage} alt="Cart-Illustration" />

          <LoginForm />
          
        </Stack>
   
    </Box>
  );
};

export default App;

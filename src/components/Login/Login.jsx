import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Login() {
  return (
    <Box
      component='form'
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
        marginTop: "5rem",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "5rem auto",
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        label='Email'
        placeholder='please insert your email'
        required
        fullWidth
      />
      <TextField label='Password' required type='password' fullWidth />
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "../../context";

export default function Login() {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const { setIsLoggedIn } = React.useContext(EmployeeContext);

  const userInfo = {
    username,
    password,
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("hello....");
    axios
      .post("http://localhost:5000/api/user/login", userInfo)
      .then(() => {
        setIsLoggedIn(true);
      })
      .then(() => {
        navigate("/employee-list");
      })
      .catch((error) => {
        console.log("Unable to register this user");
      });
  };

  return (
    <Box
      component='form'
      sx={{
        "& .MuiTextField-root": { marginBottom: "1rem", width: "100%" },
      }}
      noValidate
      autoComplete='off'
      onSubmit={handleLogin}
    >
      <TextField
        label='Username'
        placeholder='please insert your email'
        required
        fullWidth
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label='Password'
        required
        type='password'
        fullWidth
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button color='primary' variant='contained' type='submit'>
        Login
      </Button>
    </Box>
  );
}

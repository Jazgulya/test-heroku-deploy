import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Alert, Box, Button, Typography } from "@mui/material";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { signUp, error } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleValues() {
    if (!email || !password) {
      alert("Заполните поля");
      return;
    }
    signUp(email, password, navigate);
  }
  return (
    <Box
      height={"70vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Typography variant="h3" component="h2">
        Register
      </Typography>
      {error ? <Alert severity="error">{error}</Alert> : null}

      <TextField
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: "40%", margin: "10px" }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: "40%", margin: "10px" }}
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <Button
        onClick={handleValues}
        style={{ width: "40%", margin: "10px" }}
        variant="contained">
        Register
      </Button>
      <Typography variant="p" component="h2">
        Already have an account?
      </Typography>
      <Typography
        variant="p"
        color={"primary"}
        style={{ cursor: "pointer" }}
        component="h2"
        onClick={() => navigate("/login")}>
        Log in
      </Typography>
    </Box>
  );
};

export default RegisterForm;

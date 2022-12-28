import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customGet, customPost } from "../../Utilitites/custom-fetch";

export default function LoginPrac() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (username && password) {
      customGet(
        `http://localhost:3001/authenticate?username=${username}&password=${password}`
      ).then((response) => {
        if (response.result == true) {
          localStorage.setItem("usernameValue", username);

          navigate("/posts");
        } else {
          alert("Invalid");
        }
        setUsername("");
        setPassword("");
      });
    } else {
      alert("Required username and password");
    }
  }

  function signUp() {
    let obj = {
      username: username,
      password: password,
    };

    customPost(`http://localhost:3001/add-new-user`, obj).then((response) => {
      if (response.result == true) {
        alert("user added");
      } else {
        alert("User already present");
      }
    });
  }

  return (
    <div className="login-page">
      <div className="login-form">
        <TextField
          variant="outlined"
          type="text"
          label="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></TextField>{" "}
        <br></br>
        <br></br>
        <TextField
          variant="outlined"
          type="text"
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <br></br>
        <br></br>
        <Button variant="contained" onClick={login}>
          Login
        </Button>
        &nbsp;
        <Button variant="outlined" onClick={signUp}>
          SignUp
        </Button>
        <div></div>
      </div>
    </div>
  );
}

import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  // Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
// import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const storeToken = (token) => {
    const exists = localStorage.getItem("token");
    if (exists) {
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
    }
    localStorage.setItem("token", token);
  };
  const handleLogin = () => {
    const payload = { username, password };
    const headers = new Headers();
    headers.append("data", JSON.stringify(payload));
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => storeToken(data.token));
  };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 380,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#007FFF" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" style={{ marginBottom: 20 }}>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={{ marginTop: 10 }}>Login</h2>
        </Grid>
        <TextField
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: 20 }}
          value={username}
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter password"
          style={{ marginBottom: 30 }}
          type={showPass ? "text" : "password"}
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Show password"
          onChange={() => setShowPass(!showPass)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
        {/* <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography> */}
      </Paper>
    </Grid>
  );
};

export default Login;

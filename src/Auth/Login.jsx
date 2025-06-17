// @ts-ignore
import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  IconButton,
  InputAdornment,
  Alert,
  Collapse,
  CircularProgress,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TopBar from "../components/TopBar";
import { getDesignTokens } from "../theme";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode")
      : "dark"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      console.log("User Logged In:", formData);
      setLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar open={false} handleDrawerOpen={undefined} setMode={setMode} />
      <Container maxWidth="sm">
        <Paper
          sx={{
            marginTop: 14,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "background.paper",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Sign In
          </Typography>

          {/* Animated Error Alert */}
          <Collapse in={Object.keys(errors).length > 0}>
            <Alert severity="error" sx={{ mb: 2 }}>
              Please fix the errors below.
            </Alert>
          </Collapse>

          <Box component="form" onSubmit={handleLogin} sx={{ width: "100%" }}>
            <TextField
              label="Email Address"
              name="email"
              margin="normal"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              // @ts-ignore
              error={!!errors.email}
              // @ts-ignore
              helperText={errors.email}
            />

            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              // @ts-ignore
              error={!!errors.password}
              // @ts-ignore
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              sx={{ mt: 1, mb: 2 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              startIcon={loading && <CircularProgress size={20} />}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don't have an account? <Link to={"/signup"}>Sign Up</Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

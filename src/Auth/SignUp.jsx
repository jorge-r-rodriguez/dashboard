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
  CircularProgress,
  Collapse,
  Paper,
  CssBaseline,
  createTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import TopBar from "../components/TopBar";
import { Link, useNavigate } from "react-router-dom";
import { getDesignTokens } from "../theme";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode")
      : "dark"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    // First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    // Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      console.log("Form Submitted:", formData);
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
            marginTop: 12,
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
            Create New Account
          </Typography>

          {/* Animated Error Alert */}
          <Collapse in={Object.keys(errors).length > 0}>
            <Alert severity="error" sx={{ mb: 2 }}>
              Please fix the errors below.
            </Alert>
          </Collapse>

          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                label="First Name"
                name="firstName"
                margin="normal"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
                // @ts-ignore
                error={!!errors.firstName}
                // @ts-ignore
                helperText={errors.firstName}
              />

              <TextField
                label="Last Name"
                name="lastName"
                margin="normal"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
                // @ts-ignore
                error={!!errors.lastName}
                // @ts-ignore
                helperText={errors.lastName}
              />
            </Box>

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

            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              margin="normal"
              fullWidth
              value={formData.confirmPassword}
              onChange={handleChange}
              // @ts-ignore
              error={!!errors.confirmPassword}
              // @ts-ignore
              helperText={errors.confirmPassword}
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
              label="I agree to the Terms and Conditions"
              sx={{ mt: 1, mb: 2 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              startIcon={loading && <CircularProgress size={20} />}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Already have an account? <Link to={"/login"}>Sign In</Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

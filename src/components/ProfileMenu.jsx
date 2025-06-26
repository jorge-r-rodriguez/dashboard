import {
  Avatar,
  Box,
  Button,
  Divider,
  Fade,
  Menu,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";
import { Logout, Login } from "@mui/icons-material";
import React, { useState } from "react";
import { useCasUserContext } from "../context/CasUserContext";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const { casUser, setCasUser } = useCasUserContext(); // usar contexto

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setCasUser(null); // limpiar contexto
    localStorage.removeItem("casUser"); // opcional (ya lo hace el useEffect)
    handleClose();
    navigate("/login"); // redirigir
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Box>
      {casUser ? (
        <>
          <IconButton onClick={handleClick} size="small">
            <Avatar
              src={"imagen-perfil.png"}
              alt={"User"}
              sx={{ width: 30, height: 30 }}
            />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            disableScrollLock
            TransitionComponent={Fade}
            PaperProps={{
              elevation: 4,
              sx: {
                mt: 1.5,
                minWidth: 220,
                borderRadius: 3,
                overflow: "visible",
                filter: "drop-shadow(0px 4px 12px rgba(0,0,0,0.2))",
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Box sx={{ px: 2, py: 1.5 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {casUser.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {casUser.email}
              </Typography>
            </Box>

            <Divider />

            <MenuItem onClick={handleLogout}>
              <Logout fontSize="small" sx={{ mr: 1 }} />
              Sign Out
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<Login />}
          onClick={handleLogin}
          sx={{
            ml: 2,
            textTransform: "none",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          Sign In
        </Button>
      )}
    </Box>
  );
}

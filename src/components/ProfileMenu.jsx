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

export default function ProfileMenu({ user, onLogin, onLogout }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {user ? (
        <>
          <IconButton onClick={handleClick} size="small">
            <Avatar
              src={user.user.image}
              alt={"User"}
              sx={{
                width: "30px",
                height: "30px",
              }}
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
                {user.user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.user.email}
              </Typography>
            </Box>

            <Divider />

            <MenuItem
              onClick={() => {
                onLogout();
                handleClose();
              }}
            >
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
          onClick={onLogin}
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

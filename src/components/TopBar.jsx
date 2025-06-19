import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import ProfileMenu from "./ProfileMenu";
import { useLocation, useNavigate } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const demoSession = {
  user: {
    name: "Jorge Rodriguez",
    email: "Jorge@gmail.com",
    image: "imagen-perfil.png",
  },
};

const notificationArr = [
  {
    id: 1,
    sender: "Jorge Rodriguez",
    message: "Sent you a new message",
    icon: "📩",
    read: false,
  },
  {
    id: 2,
    sender: "Admin",
    message: "System update is available",
    icon: "🔔",
    read: false,
  },
];

export default function TopBar({ open, handleDrawerOpen, setMode }) {
  const theme = useTheme();
  const [session, setSession] = useState(demoSession);

  const navigate = useNavigate();

  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState(notificationArr);

  const openEl = Boolean(anchorEl);

  const authentication = useMemo(
    () => ({
      signIn: () => {
        setSession(demoSession);
        navigate("/login");
      },
      signOut: () => setSession(undefined),
    }),
    [navigate]
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMarkAllAsRead = () => {
    const updatedNotifications = notifications.map((notif) => ({
      ...notif,
      read: true,
    }));
    setNotifications(updatedNotifications);
    handleClose();
  };

  const unreadCount = notifications.filter((notif) => !notif.read).length;

  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        {location.pathname === "/signup" ||
        location.pathname === "/login" ? null : (
          <IconButton
            className="display"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Logo */}
        <Typography className="logo-large" variant="h4" align="center">
          Dashboard
        </Typography>

        <Box flexGrow={1} />

        <Stack direction={"row"}>
          {/* Light And Dark Toggle */}
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode((prevMode) =>
                  prevMode === "light" ? "dark" : "light"
                );
              }}
              color="inherit"
            >
              <LightModeOutlined />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode((prevMode) =>
                  prevMode === "light" ? "dark" : "light"
                );
              }}
              color="inherit"
            >
              <DarkModeOutlined />
            </IconButton>
          )}

          {location.pathname === "/signup" ||
          location.pathname === "/login" ? null : (
            <>
              {/* Notifications Icon */}
              <IconButton color="inherit" onClick={handleClick}>
                <Badge badgeContent={unreadCount} color="error">
                  <NotificationsOutlined />
                </Badge>
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={openEl}
                onClose={handleClose}
                disableScrollLock
                PaperProps={{
                  sx: {
                    p: 2,
                    borderRadius: 2,
                    minWidth: "300px",
                    boxShadow: 3,
                  },
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  px={1}
                  py={0.5}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    Notifications
                  </Typography>
                  <Button size="small" onClick={handleMarkAllAsRead}>
                    Mark all as read
                  </Button>
                </Box>
                <Divider sx={{ my: 1 }} />

                {/* Show Notifications */}
                {notifications.length > 0 ? (
                  notifications.map((notif) => (
                    <MenuItem
                      key={notif.id}
                      onClick={handleClose}
                      sx={{
                        borderRadius: 1,
                        backgroundColor: notif.read
                          ? "transparent"
                          : "rgba(0, 0, 0, 0.04)",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                        },
                        alignItems: "flex-start",
                        gap: 2,
                      }}
                    >
                      <ListItemIcon>
                        <Avatar sx={{ width: 32, height: 32, fontSize: 18 }}>
                          {notif.icon}
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Stack spacing={0.5}>
                            <Typography fontWeight="bold" variant="body2">
                              {notif.sender}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {notif.message}
                            </Typography>
                          </Stack>
                        }
                      />
                    </MenuItem>
                  ))
                ) : (
                  <Typography textAlign="center" sx={{ p: 2 }}>
                    No new notifications 🎉
                  </Typography>
                )}
              </Menu>

              {/* Sign In */}
              <ProfileMenu
                user={session}
                onLogin={authentication.signIn}
                onLogout={authentication.signOut}
              />
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

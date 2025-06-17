import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MuiDrawer from "@mui/material/Drawer";
import { useTheme } from "@emotion/react";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  PeopleAltOutlined,
  PersonOutlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const Array1 = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
    path: "/",
  },
  {
    text: "Manage Team",
    icon: <PeopleAltOutlined />,
    path: "/team",
  },
  {
    text: "Contacts Information",
    icon: <ContactsOutlined />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlined />,
    path: "/invoices",
  },
];

const Array2 = [
  {
    text: "Profile Form",
    icon: <PersonOutlined />,
    path: "/form",
  },
  {
    text: "Calendar",
    icon: <CalendarTodayOutlined />,
    path: "/calendar",
  },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlined />,
    path: "/faq",
  },
];

const Array3 = [
  {
    text: "Bar Chart",
    icon: <BarChartOutlined />,
    path: "/bar",
  },
  {
    text: "Pie Chart",
    icon: <PieChartOutlineOutlined />,
    path: "/pie",
  },
  {
    text: "Line Chart",
    icon: <TimelineOutlined />,
    path: "/line",
  },
];

export default function SideBar({ open, handleDrawerClose }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Drawer variant="permanent" open={open}>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box flex={1} sx={{ marginLeft: "56px" }}>
            <Typography variant="h5" align="center">
              Dashboard
            </Typography>
          </Box>

          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {
                // @ts-ignore
                theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )
              }
            </IconButton>
          </DrawerHeader>
        </Box>

        <Divider />

        <Avatar
          className="transition"
          sx={{
            mx: "auto",
            my: 1,
            border: "2px solid gray",
            width: open ? "88px" : "40px",
            height: open ? "88px" : "40px",
          }}
          alt=".."
          src="imagen-perfil.jpg"
        />
        <Typography
          className="transition"
          align="center"
          sx={{ fontSize: open ? "17px" : "0" }}
        >
          Jorge
        </Typography>
        <Typography
          className="transition"
          align="center"
          // @ts-ignore
          sx={{ fontSize: open ? "15px" : "0", color: theme.palette.info.main }}
        >
          Admin
        </Typography>

        <Divider />

        <List>
          {Array1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? // @ts-ignore
                          theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : "",
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {Array2.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? // @ts-ignore
                          theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : "",
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {Array3.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? // @ts-ignore
                          theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : "",
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

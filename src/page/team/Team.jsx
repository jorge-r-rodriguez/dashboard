import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { rows } from "./Data";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
  Widgets,
  WidthFull,
} from "@mui/icons-material";
import Header from "../../components/Header";

export default function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: "email",
      align: "center",
      headerAlign: "center",
     flex: 1,
    },
    {
      field: "age",
      headerName: "age",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "phone",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "access",
      headerName: "access",
      align: "center",
      headerAlign: "center",
      width: 200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",

              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                    ? theme.palette.secondary.dark
                    : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}

            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 580, width: "90%", mx: "auto" }}>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
      <Box
        sx={{
          width: "100%",
          overflow: "auto",
          mx: "auto",
          "&.MuiDataGrid-root": {
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "300px",
              sm: "500px",
              md: "900px",
              lg: "100%",
              xl: "100%",
            },
            mx: "auto",
          }}
        >
          <DataGrid
            rows={rows}
            // @ts-ignore
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
      </Box>
    </Box>
  );
}

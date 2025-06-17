import { Box, useTheme } from "@mui/material";
import React from "react";
import { columns, rows } from "./Data";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";

export default function Contacts() {
  const theme = useTheme();
  return (
    <Box sx={{ height: 580, width: "90%", mx: "auto" }}>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <Box
        sx={{
          width: "100%",
          overflow: "auto",
          mx: "auto",
          "&.MuiDataGrid-root": {
            backgroundcolor: theme.palette.background.paper,
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
            slots={{
              toolbar: GridToolbar,
            }}
            rows={rows}
            // @ts-ignore
            columns={columns}
          />
        </Box>
      </Box>
    </Box>
  );
}

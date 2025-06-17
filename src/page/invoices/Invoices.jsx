import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { columns, rows } from "./Data";
import Header from "../../components/Header";

export default function Invoices() {
  return (
    <Box sx={{ height: 580, width: "90%", mx: "auto" }}>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />

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
          checkboxSelection
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
}

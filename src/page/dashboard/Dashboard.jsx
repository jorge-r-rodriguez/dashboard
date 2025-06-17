import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Box, Button, Stack } from "@mui/material";
import { DownloadOutlined, Padding } from "@mui/icons-material";
import Header from "../../components/Header";

export default function Dashboard() {
  return (
    <Box>
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={"row"}
        flexWrap={{ xs: "wrap" }}
      >
        <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />
        <Box sx={{ textAlign: "right" }}>
          <Button
            sx={{ Padding: "6px 8px" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
}

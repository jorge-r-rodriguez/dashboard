import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Card from "./Card";
import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { data1, data2, data3, data4 } from "./Data";

export default function Row1() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={{ sm: "center", md: "space-between" }}
      gap={1}
      sx={{ marginTop: "20px" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Card
          icon={
            <Email
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"12,361"}
          subTitle={"Email Sent"}
          increase={"+14%"}
          data={data1}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Card
          icon={
            <PointOfSale
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"431,225"}
          subTitle={"Sales obtained"}
          increase={"+21%"}
          data={data2}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Card
          icon={
            <PersonAdd
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"32,441"}
          subTitle={"New Clients"}
          increase={"+5%"}
          data={data3}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Card
          icon={
            <Traffic
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"1,325,134"}
          subTitle={"Traffic Received"}
          increase={"+43%"}
          data={data4}
        />
      </Box>
    </Stack>
  );
}

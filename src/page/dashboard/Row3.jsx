import { useTheme } from "@emotion/react";
import { Paper, Stack, Typography } from "@mui/material";
import PieChart from "../pie/PieChart";
import React from "react";
import BarChart from "../bar/BarChart";

export default function Row3() {
  const theme = useTheme();
  return (
    <Stack mt={2} direction={{ "2000px": "column", lg: "row" }} gap={2}>
      <Paper
        sx={{
          flexGrow: 1,
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            "2000px": "100%",
            lg: "30%",
          },
        }}
      >
        <Typography
          // @ts-ignore
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>

        <PieChart isDashboard={true} />

        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper
        sx={{
          flexGrow: 1,
          padding: 2,
          marginInline: "auto",
          width: {
            xs: "99%",
            sm: "99%",
            md: "99%",
            "2000px": "100%",
            lg: "70%",
          },
        }}
      >
        <Typography
          // @ts-ignore
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>

        <BarChart isDashbord={true} />
      </Paper>
    </Stack>
  );
}

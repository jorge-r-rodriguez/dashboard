import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { options } from "./Data";

export default function Card({ icon, title, subTitle, data, increase }) {
  return (
    <>
      <Paper
        sx={{
          minWidth: "333px",
          padding: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack gap={1}>
          {icon}
          <Typography variant="body2" sx={{ fontSize: "13px" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "13px" }}>
            {subTitle}
          </Typography>
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"} gap={1}>
          <Box sx={{ height: "75px", width: "150px" }}>
            <Doughnut
              style={{
                width: "100%",
                height: "100%",
                margin: "0 auto",
                padding: "0",
              }}
              data={data}
              // @ts-ignore
              options={options}
            />
          </Box>
          <Typography variant="body2" sx={{ fontSize: "13px" }}>
            {increase}
          </Typography>
        </Stack>
      </Paper>
    </>
  );
}

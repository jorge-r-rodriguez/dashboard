import { useTheme } from "@emotion/react";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import LineChart from "../line/LineChart";
import { Transactions } from "./Data";
import { DownloadOutlined } from "@mui/icons-material";

export default function Row2() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr", lg: "2fr 1fr" },
        marginInline: "auto",
        gap: 1.5,
      }}
    >
      <Paper sx={{ padding: "20px", width: "100%" }}>
        <Box sx={{ height: "100%", width: "90%", margin: "auto" }}>
          <Stack
            alignItems={"center"}
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            mb={2}
          >
            <Box>
              <Typography
                // @ts-ignore
                color={theme.palette.secondary.main}
                mb={1}
                mt={2}
                variant="h6"
                fontWeight={"bold"}
              >
                Revenue Generated
              </Typography>
              <Typography variant="body2">$59,342.32</Typography>
            </Box>

            <Box>
              <IconButton sx={{ mr: 3 }}>
                <DownloadOutlined />
              </IconButton>
            </Box>
          </Stack>
          <LineChart isDashboard={true} />
        </Box>
      </Paper>

      <Box
        sx={{
          overflow: "auto",
          borderRadius: "4px",
          minWidth: "280px",
          maxHeight: "482px",
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            // @ts-ignore
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
{Transactions.map((item) => {
  return (
    <Paper
      key={item.txId} // ← clave única
      sx={{
        mt: 0.4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: 2,
      }}
    >
      <Box p={1.2}>
        <Typography variant="body1">{item.txId}</Typography>
        <Typography variant="body2">{item.txId}</Typography>
      </Box>
      <Typography variant="body1">{item.date} </Typography>

      <Typography
        borderRadius={1.4}
        p={1}
        // @ts-ignore
        bgcolor={theme.palette.error.main}
        // @ts-ignore
        color={theme.palette.getContrastText(theme.palette.error.main)}
        variant="body2"
        sx={{ width: "70px", textAlign: "center" }}
      >
        ${item.cost}
      </Typography>
    </Paper>
  );
})}

      </Box>
    </Box>
  );
}

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box, Container, useTheme } from "@mui/material";
import Header from "../../components/Header";

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

export default function PieChart({ isDashboard = false }) {
  const theme = useTheme();
  const data = {
    labels: ["HTML", "CSS", "JS", "Bootstrap", "React"],
    datasets: [
      {
        label: "Programming Languages",
        data: [272, 434, 543, 401, 451],
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 205, 86, 0.7)",
          "rgba(255, 99, 132, 0.7)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    color: theme.palette.text.primary,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: "Programming Languages Popularity",
        color: theme.palette.text.primary,
      },
      datalabels: {
        display: true,
        color: "#fff",
        font: {
          weight: "bold",
          size: 14,
        },
        align: "center",
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
      },
    },
  };

  const location = window.location.pathname;

  return (
    <Box
      sx={{
        height: isDashboard
          ? "300px"
          : { xs: "500px", sm: "500px", md: "450px", lg: "500px" },
        maxWidth: isDashboard
          ? "100%"
          : { xs: "400px", sm: "90%", md: "80%", lg: "70%", xl: "100%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginInline: "auto",
      }}
    >
      {location === "/pie" ? (
        <Box
          sx={{
            marginTop: 10,
            textAlign: "left",
            display: "block",
            width: "90%",
          }}
        >
          <Header title="Pie Chart" subTitle="Simple Pie Chart" />
        </Box>
      ) : null}
      <Doughnut
        data={data}
        // @ts-ignore
        options={options}
      />
    </Box>
  );
}

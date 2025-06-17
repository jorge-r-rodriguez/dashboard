import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, useTheme } from "@mui/material";
import { Bar } from "react-chartjs-2";
import Header from "../../components/Header";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

export default function BarChart(isDashboard = false) {
  const theme = useTheme();
  const data = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Garmany",
        data: [1700, 1800, 1900, 2000, 2060],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(54, 162, 235, 0.5)",
        borderWidth: 1,
      },
      {
        label: "France",
        data: [1400, 1500, 1600, 1750, 1708],
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        borderColor: "rgba(54, 162, 235, 0.5",
        borderWidth: 1,
      },
      {
        label: "Spain",
        data: [900, 1000, 1100, 1200, 1250],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 0.5)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    color: theme.palette.text.primary,
    plugins: {
      legend: {
        labels: {
          color: theme.palette.text.primary,
        },
        position: "top",
      },
      // @ts-ignore
      datalabels: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: isDashboard ? true : false,
        text: "Salaary By Country (2019 - 2024)",
        color: theme.palette.text.primary,
      },
    },
    scales: {
      x: {
        title: {
          display: isDashboard ? false : true,
          text: "Year",
          color: theme.palette.text.primary,
        },
        ticks: {
          color: theme.palette.text.primary,
          stepSize: 200,
        },
        grid: {
          color: theme.palette.grey.A700,
        },
        beginAtZero: true,
      },
      y: {
        ticks: {
          color: theme.palette.text.primary,
          stepSize: 200,
        },
        grid: {
          color: theme.palette.grey.A700,
        },
        title: {
          display: isDashboard ? false : true,
          text: "Salaary Count",
          color: theme.palette.text.primary,
        },
        beginAtZero: true,
      },
    },
  };

  const location = window.location.pathname;
  console.log(location);

  // @ts-ignore
  return (
    <Box
      sx={{
        height: isDashboard
          ? "400px"
          : { xs: "250px", sm: "350px", md: "450px", lg: "500px" },
        maxWidth: isDashboard
          ? "90%"
          : { xs: "300px", sm: "90%", md: "80%", lg: "70%", xl: "60%" },
        marginInline: "auto",
      }}
    >
      {location === "/bar" ? (
        <Header
          title="Bar Chart"
          subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
        />
      ) : null}
      <Bar
        data={data}
        // @ts-ignore
        options={options}
      />
    </Box>
  );
}

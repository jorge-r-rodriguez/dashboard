import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ isDashboard = false }) {
  const theme = useTheme();
  const data = {
    labels: [
      "plane",
      "helicopter",
      "boat",
      "train",
      "subway",
      "bus",
      "car",
      "moto",
      "bicycle",
      "horse",
      "skateboard",
      "others",
    ],
    datasets: [
      {
        label: "Norway",
        data: [100, 200, 200, 400, 500, 400, 500, 400, 400, 200, 100, 150],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointHoverRadius: 7,
      },
      {
        label: "Garmany",
        data: [200, 300, 300, 500, 600, 600, 600, 600, 500, 300, 300, 100],
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: "rgba(255, 159, 64, 1)",
        pointHoverRadius: 7,
      },
      {
        label: "US",
        data: [300, 300, 400, 600, 700, 800, 700, 700, 600, 500, 300, 200],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.4,
        fill: false,
        pointRadius: 5,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointHoverRadius: 7,
      },
      {
        label: "France",
        data: [400, 500, 500, 700, 800, 900, 800, 800, 700, 500, 400, 300],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4,
        fill: false,
        pointRadius: 5,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointHoverRadius: 7,
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
        display: isDashboard ? false : true, // Hide THe Top Labels
      },
      tooltip: {
        mode: "index",
        intersect: false,
        position: "nearest",
      },
      // @ts-ignore
      datalabels: {
        display: false,
      },
      title: {
        display: isDashboard ? false : true, // Hide Title
        text: "Transportation Count Over Years",
        color: theme.palette.text.primary,
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme.palette.text.primary,
          stepSize: 200,
        },
        grid: {
          color: theme.palette.grey.A700,
        },
        title: {
          display: isDashboard ? false : true, // Hide Title In The Bottom
          text: "Transportation",
          color: theme.palette.text.primary,
        },
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
          display: isDashboard ? false : true, // Hide Title In The Left
          text: "Count",
          color: theme.palette.text.primary,
        },
        min: 0,
      },
    },
  };

  const location = window.location.pathname;

  return (
    <Box
      sx={{
        height: isDashboard
          ? "350px"
          : { xs: "400px", sm: "400px", md: "450px", lg: "500px" },
        maxWidth: isDashboard
          ? "100%"
          : { xs: "90%", sm: "90%", md: "90%", lg: "90%", xl: "90%" },
        mx: "auto",
      }}
    >
      {location === "/line" ? (
        <Box
          sx={{
            textAlign: "left",
            display: "block",
            width: "90%",
          }}
        >
          <Header title="Line Chart" subTitle="Simple Line Chart" />
        </Box>
      ) : null}
      <Line
        data={data}
        // @ts-ignore
        options={options}
      />
    </Box>
  );
}

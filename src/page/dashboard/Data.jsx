export const data1 = {
  labels: ["HTML", "CSS"],
  datasets: [
    {
      data: [200, 300],
      backgroundColor: ["rgba(54, 162, 235, 0.7)", "rgba(255, 159, 64, 0.7)"],
      borderColor: false,
      borderWidth: 0,
    },
  ],
};

export const data2 = {
  labels: ["JS", "REACT"],
  datasets: [
    {
      data: [1000, 500],
      backgroundColor: ["rgba(192, 75, 75, 0.7)", "rgba(123, 86, 255, 0.7)"],
      borderColor: false,
      borderWidth: 0,
    },
  ],
};

export const data3 = {
  labels: ["C#", "C++"],
  datasets: [
    {
      data: [400, 600],
      backgroundColor: [
        "rgba(117, 255, 211, 0.55)",
        "rgba(255, 239, 117, 0.7)",
      ],
      borderColor: false,
      borderWidth: 0,
    },
  ],
};

export const data4 = {
  labels: ["Laravel", "Node JS"],
  datasets: [
    {
      data: [200, 700],
      backgroundColor: ["rgba(54, 162, 235, 0.7)", "rgba(137, 255, 64, 0.57)"],
      borderColor: false,
      borderWidth: 0,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    tooltip: {
      enabled: true,
    },
    title: {
      display: false,
    },
    datalabels: {
      display: false,
      color: "#fff",
      font: {
        weight: "bold",
        size: 14,
      },
    },
  },
};

export const Transactions = [
  {
    txId: "01e4dsaewf",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.91",
  },
  {
    txId: "0315dsaaef",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsaef",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szvfew",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.49",
  },
];

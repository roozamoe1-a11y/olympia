"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ],

  datasets: [
    {
      label: "فروش هفتگی",

      data: [0, 0, 0, 0, 0, 0, 0],

      borderColor: "#facc15",

      backgroundColor: "rgba(250,204,21,0.15)",

      fill: true,

      tension: 0.35,

      pointRadius: 4,

      pointHoverRadius: 6,
    },
  ],
};

const options = {
  responsive: true,

  plugins: {
    legend: {
      labels: {
        color: "#ffffff",
      },
    },
  },

  scales: {
    x: {
      ticks: {
        color: "#a1a1aa",
      },

      grid: {
        color: "#27272a",
      },
    },

    y: {
      ticks: {
        color: "#a1a1aa",
      },

      grid: {
        color: "#27272a",
      },

      beginAtZero: true,
    },
  },
};

export default function StatsChart() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#111] p-6">

      <h2 className="mb-6 text-xl font-bold text-yellow-400">
        نمودار فروش
      </h2>

      <Line
        data={data}
        options={options}
      />

    </div>
  );
}
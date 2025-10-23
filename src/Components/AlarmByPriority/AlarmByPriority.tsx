"use client";

import { Card } from "antd";
import { ExpandAltOutlined, ExportOutlined } from "@ant-design/icons";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import React from "react";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

export default function AlarmByPriority() {
  const data = {
    labels: [
      "Dec 3 - Dec 9",
      "Dec 10 - Dec 16",
      "Dec 17 - Dec 23",
      "Dec 24 - Dec 30",
    ],
    datasets: [
      {
        label: "Total Alarms",
        data: [14, 25, 10, 33, 9, 28, 20],
        fill: true,
        borderColor: "#facc15",
        backgroundColor: "rgba(250, 204, 21, 0.2)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6b7280" },
      },
      y: {
        grid: { color: "#f3f4f6" },
        ticks: { stepSize: 10 },
      },
    },
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Alarms by Priority</div>
        <div className="flex items-center gap-3">
          <ExportOutlined />
          <ExpandAltOutlined />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-semibold">473</span>
        <span className="text-gray-500 mb-4">Total Alarms</span>
        <Line data={data} options={options} height={40} />
      </div>
    </Card>
  );
}

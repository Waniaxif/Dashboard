"use client";

import { Card } from "antd";
import {
  ExpandAltOutlined,
  ExportOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, ChartTooltip, Legend);

export default function HotObjects() {
  const hotObjects = [
    { count: 60, percent: 11, name: "P23C155 Alarm Zone 1" },
    { count: 45, percent: 7, name: "P23C155 Alarm Zone 3" },
    { count: 27, percent: 6, name: "P8C77 - Alarm Zone 2" },
    { count: 27, percent: 6, name: "P26C157 - Alarm Zone 2" },
    { count: 15, percent: 5, name: "P27C149 - Alarm Zone 2" },
    { count: 15, percent: 5, name: "P27C123 - Alarm Zone 3" },
  ];

  const total = 189;

  const data = {
    datasets: [
      {
        data: [60, 45, 27, 27, 15, 15],
        backgroundColor: [
          "#ff4d4f",
          "#fa8c16",
          "#ff7875",
          "#ffa39e",
          "#ffccc7",
          "#ffccc7",
        ],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Hot Objects</div>
        <div className="flex items-center gap-3">
          <ExportOutlined />
          <ExpandAltOutlined />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-3">
          {hotObjects.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-red-500 font-semibold w-8">
                {item.count}
              </span>
              <span className="text-gray-500 text-sm bg-gray-100 px-1 rounded">
                {item.percent}%
              </span>
              <SoundOutlined className="text-gray-400" />
              <span className="text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative w-32 h-32">
            <Doughnut
              data={data}
              options={{
                cutout: "80%",
                plugins: { legend: { display: false } },
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-semibold">{total}</span>
              <span className="text-gray-500 text-xs">Total Hot Alarms</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

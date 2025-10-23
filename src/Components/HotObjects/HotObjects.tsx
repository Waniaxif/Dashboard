"use client";

import { Card } from "antd";
import { SoundOutlined } from "@ant-design/icons";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import ExportExpantButton from "../ExportExpantButton/ExportExpantButton";

ChartJS.register(ArcElement, ChartTooltip, Legend);

export default function HotObjects() {
  const hotObjects = [
    { count: 60, percent: 11, name: "P23C155 - Alarm Zone 1" },
    { count: 45, percent: 7, name: "P23C155 - Alarm Zone 3" },
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
          "#ffd6d6",
        ],
        borderColor: "#ffffff", // 👈 creates the visible space
        borderWidth: 3, // 👈 controls gap thickness
        cutout: "80%",
      },
    ],
  };

  return (
    <Card>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Hot Objects</div>
        <div className="">
          <ExportExpantButton />
        </div>
      </div>

      {/* Responsive Body */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* Left - Two-column grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 flex-1">
          {hotObjects.map((item, index) => (
            <div key={index} className="flex flex-col space-y-1">
              {/* Top row: dot, count, percent */}
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-red-500 rounded-full inline-block"></span>
                <span className="text-gray-800 font-semibold text-sm">
                  {item.count}
                </span>
                <span className="text-gray-500 text-xs bg-gray-100 px-1 rounded">
                  {item.percent}%
                </span>
              </div>

              {/* Bottom row: sound icon + name */}
              <div className="flex items-center space-x-2 text-gray-600 text-sm">
                <SoundOutlined className="text-gray-400" />
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Doughnut chart */}
        <div className="flex justify-center md:justify-end">
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
              <span className="text-gray-500 text-xs text-center leading-tight">
                Total Hot Alarms
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
